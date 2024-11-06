'use client';

import Styles from './index.module.scss';
import { i18n } from '../../../i18n-config';
import { usePathname,useRouter } from 'next/navigation';
import Button from '../Button';
const Language = ({ languageCollection,locale }: any) => {

  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e:string )=> {
    const newLocale = e;
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

  
    if (
      locale === i18n.defaultLocale &&
      !i18n.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${locale}`, `/${newLocale}`)
      );
    }
    router.refresh();
  };
   
  return (
    <div className={`dFlex alignItemsCenterSm ${Styles.gap32}`}>
           {languageCollection?.items?.map(({ title, value }: any, idx: number) => (
        <div
          key={`lang-${idx}`}
          className={`dFlex  alignItemsCenterSm dividerR ${Styles.langCon}`}
        > <div className={Styles.lang}>
             <Button
                type={'Button'}
                className={`${Styles.buton} langbtn`}
                onClick={() => handleChange(value)}
                label={title}
              />
          </div>
        </div>
      ))} 
    </div>
  );
};

export default Language;
