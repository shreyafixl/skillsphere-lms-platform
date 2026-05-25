const bcrypt = require("bcrypt")
const prisma = require("../config/db")

const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    })

    res.status(201).json({
      message: "User created successfully",
      user,
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: "Server error",
    })
  }
}

module.exports = {
  signup,
}