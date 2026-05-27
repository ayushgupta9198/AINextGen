export const metadata = {
  title: "AINextGen",
  description: "AI Innovation Platform",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
