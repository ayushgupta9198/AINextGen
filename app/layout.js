import "./globals.css";

export const metadata = {
  title: "AINextGen - AI Innovation Lab",
  description:
    "AI Engineer Portfolio | GenAI | Voice AI | RAG | Multi-Agent Systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
