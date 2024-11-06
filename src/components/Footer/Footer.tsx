import FooterQuery from '@/contentful/queries/pages/footer';
import CookieQuery from '@/contentful/queries/pages/cokkiePolicy';
import FooterContent from './FooterContent';
import style from './index.module.scss';
import CookiePrivacy from './CookiePrivacy';
type Props = {
  locale: string;
};

export default async function Footer({ locale }: Props) {
  const footerData = await FooterQuery(locale == 'ar' ? 'ar' : '');
  const cookieData = await CookieQuery(locale == 'ar' ? 'ar' : '')
  const data = footerData?.footerCollection?.items[0];
  const dataCookie = cookieData?.cokkiePolicyPopupCollection

  return (
    <>
      <CookiePrivacy dataCookie={dataCookie} />
      <footer className={style.footer}>
        <FooterContent locale={locale} data={data} style={style} />
      </footer>
    </>

  );
}
