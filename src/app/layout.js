import { DM_Sans, Poltawski_Nowy } from "next/font/google";

import "./globals.css";

const semserifa = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-dm-sans",
});

const comserifa = Poltawski_Nowy({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poltawski",
});

export const metadata = {
  title: "Cristina Braga - Desenvolvedora de pessoas",
  description:
    "Cristina Braga é uma profissional altamente dedicada quando o assunto é lhe dar com as pessoas!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${comserifa.variable} ${semserifa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
