'use client';
import { IntlProvider } from 'react-intl';
import Image from 'next/image';
import Divider from '../Divider';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { i18n } from '../../../i18n-config';
import { useRouter } from 'next/navigation';
import { AccordionItem, Accordion } from '../Accordion';
import { UseMediaQuery } from '@/util/hooks/useMediaQuery';
import { title } from 'process';
type Props = {
  locale: string;
  style: any;
  data?: any;
};
export default function FooterContent({
  locale,

  style,
  data,
}: Props) {
  const { defaultLocale } = i18n;
  const {
    logo,
    copyright,
    actions,
    footerMenuCollection,
    stayCard,
    socialLinksCollection,
  } = data;

  const router = useRouter();
  const mobileMedia = UseMediaQuery('991.98');

  return (
    <IntlProvider locale={locale}>
      <div className="containerXL">
        <div className={`rowFlex ${style.topfooter}`}>
          <div className="columnLg3">
            <div className={`${style.commoncol} rightBorder`}>
              <div className={style.imgLogo}>
                <Image
                  src={logo?.image?.url}
                  height={logo?.image?.height}
                  width={logo?.image?.width}
                  alt={logo.alt}
                />
                <h6>{stayCard?.title}</h6>
              </div>
              <div>
                <div className={style.contactText}>
                  <div className={style.phoneText}>
                    {documentToReactComponents(stayCard?.description?.json)}
                  </div>
                </div>
                <div className={`rowFlex`}>
                  <div className="column12">
                    <div className={style.footerIcon}>
                      <h6>Follow us</h6>
                      {socialLinksCollection?.items?.map(
                        (item: any, idx: any) => (
                          <Link
                            key={`socialLinksCollection${idx}`}
                            href={item?.url}
                            target={item?.target}
                            className={item?.iconClass}
                          ></Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columnLg7">
            <div className={style.footerMenu}>
              <Accordion
                preventClose={!mobileMedia}
                className={`rowFlex rowGutters12`}
              >
                {footerMenuCollection?.items.map(
                  ({ title, dropdownCollection, isDropdown }: any) => (
                    <AccordionItem
                      preventClose={!mobileMedia}
                      className={`columnLg  ${style.mb24}`}
                      key={`${title}`}
                      isDropdown={isDropdown}
                      dropdownCollection={dropdownCollection?.items}
                      title={title}
                    />
                  )
                )}
              </Accordion>
            </div>
          </div>
          <div className="columnLg2">
            <div
              className={`${style.footerList} ${style.commoncol} ${style.commoncolLast}`}
            >
              <h6>{actions?.title}</h6>
              <div className={`dFlex ${style?.appLogo}`}>
                {actions?.dropdownCollection?.items?.map((itm: any) => (
                  <div
                    className="imgCol"
                    key={`${itm?.backgroundImage?.ariaLabel}`}
                  >
                    <Link href={itm?.url} target='_blank'>
                      <Image
                        aria-label={itm?.backgroundImage?.ariaLabel}
                        src={itm?.backgroundImage?.image?.url}
                        height={itm?.backgroundImage?.image?.height}
                        width={itm?.backgroundImage?.image?.width}
                        alt={itm?.backgroundImage?.alt}
                      />
                    </Link>

                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="column12">
            <div className={`${style.btmfooter}`}>
              <Divider isHorizontal />
              <div className={style.copyright}>{copyright}</div>
            </div>
          </div>
        </div>
      </div>
    </IntlProvider>
  );
}
