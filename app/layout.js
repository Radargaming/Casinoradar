import "./globals.css";
export const metadata = {
  title: "CasinoRadar - Casino Reviews & Bonuses",
  description:
    "Casino reviews, bonuses and guides in English, Russian and Spanish."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
