import Header from '@/components/Header/index';
import Footer from '../../../components/Footer/Footer';
import { getDirection } from '../../../util/intl';
import { fontello, inter } from '@/styles/fonts';
import '@/styles/global.scss';
import '@/fontello/css/fontello.css';
import '@/styles/grid.scss';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import Error from './error';
import GlobalError from './global-error';
import { i18n } from '../../../../i18n-config';
type Props = {
  params: { locale: string };
  children: React.ReactNode;
};
export async function generateStaticParams() {
  return i18n?.locales?.map((itm) => {
    return { lang: itm };
  });
}
export default function RootLayout({ params, children }: Props) {
  const { locale } = params;
  const dir = getDirection(locale);
  return (
    <html
      className={locale == 'ar' ? 'langAr' : 'langEn'}
      lang={locale}
      dir={dir}
    >
      <body className={`${inter.variable} ${fontello.variable}`}>
      <Header locale={locale} />
        <ErrorBoundary
          children={children}
          errorComponent={Error}
        ></ErrorBoundary>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
