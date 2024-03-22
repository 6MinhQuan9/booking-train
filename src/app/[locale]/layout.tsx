import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import NavBarContainer from "../components/Layouts/NavBarContainer";

export const metadata: Metadata = {
  title: "Tổng công ty đường sắt Việt Nam",
  description: "Đường sắt Việt Nam",
};

const locales = ['en', 'vi'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }
  : Readonly<{
    children: React.ReactNode;
    params: any;
  }>) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
          <Header />
          <NavBarContainer />
          {children}
          <Footer />
      </body>
    </html>
  );
}
