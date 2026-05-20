"use client"

export default function StatsCard({
  title,
  value,
  growth,
  icon,
  iconBg,
  iconColor
}) {

  return (

    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-3 text-slate-800">
            {value}
          </h2>

          <p className="text-green-500 text-sm mt-3">
            {growth}
          </p>

        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg}`}
        >
          <div className={iconColor}>
            {icon}
          </div>
        </div>

      </div>

    </div>

  )

}