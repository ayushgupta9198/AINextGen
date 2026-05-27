
import "./globals.css";

export const metadata = {
  title: "AINextGen",
  description: "AI Innovation Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
