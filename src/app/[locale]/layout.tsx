import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import HeaderComponent from "@/components/view/header/components/Header";
import { Montserrat } from "next/font/google";
import Footer from "@/components/view/footer/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={
          "max-w-8xl ml-auto mr-auto font-montserrat " + montserrat.className
        }
      >
        <NextIntlClientProvider>
          <HeaderComponent />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
