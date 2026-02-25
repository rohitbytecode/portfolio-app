export const metadata = {
  title: "Rohit | Backend Engineer",
  description:
    "Backend Engineer specializing in DSA, scalable backend systems, CI/CD and DevOps.",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}