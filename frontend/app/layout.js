import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere - Enterprise Learning Platform",
  description: "Transform learning and empower growth with SkillSphere, the complete enterprise LMS platform for employee onboarding, AI-powered training, and measurable skill development.",
  keywords: "LMS, learning management system, employee training, onboarding, AI learning, enterprise education",
  authors: [{ name: "SkillSphere" }],
  openGraph: {
    title: "SkillSphere - Enterprise Learning Platform",
    description: "Transform learning and empower growth with SkillSphere",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
