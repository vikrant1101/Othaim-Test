import React from 'react';
import PageLayout from '@/components/internalLayout';
import Styles from './index.module.scss';
import ContactUsForm from './_components/contactUsForm';
import Divider from '@/components/Divider';
import ContactUsQuery from '@/contentful/queries/pages/contactus';
type ContactUsProps = {
  params: { locale: string };
};
const Page = async ({ params: { locale } }: ContactUsProps) => {
  const contactUsdata = await ContactUsQuery(locale);
  const contactUsCollection = contactUsdata?.contactPageCollection?.items[0];
  return (
    <PageLayout
      BreadcrumbData={contactUsCollection?.breadcrumb?.linksCollection?.items}
      bannerHeading={contactUsCollection?.innerBanner?.title || 'Contact Us'}
    >
      <div className={`containerXL innerSpace ${Styles.contactUs}`}>
        <div className="rowFlex rowGutters12">
          <div className={`columnMd4 ${Styles.reverse}`}>
            <div className={Styles.contactInfo}>
              {contactUsCollection?.contactLeftBarCollection?.items?.map(
                (itm: any) => (
                  <>
                    <div>
                      <h4>{itm?.title}</h4>
                    </div>
                    <div className={Styles.InfroCon}>
                      <div>
                        <h5>{itm?.subTitle}</h5>
                        {itm?.linksCollection?.items.map((itm: any) => (
                          <div className={Styles.infoBox}>
                            <p className={Styles.infoHeading}>{itm?.title}</p>
                            <p>{itm?.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
          <div className={Styles.divider}>
            <Divider isHorizontal />
          </div>
          <div className="columnMd8">
            <div className={Styles.contactForm}>
              <div>

                {
                  //@ts-ignore
                  contactUsCollection?.contactFormField?.title ? (
                    <h4 className="h4">
                      {
                        //@ts-ignore
                        contactUsCollection?.contactFormField?.title
                      }
                    </h4>
                  ) : null
                }
                <ContactUsForm
                  locale={locale}
                  contactFormField={contactUsCollection?.contactFormField}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
