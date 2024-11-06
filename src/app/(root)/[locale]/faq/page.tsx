import PageLayout from '@/components/internalLayout';
import Styles from './index.module.scss';
import { AccordionItem, Accordion } from '@/components/Accordion';
import FaqQuery from '@/contentful/queries/pages/faq';
import { ACCORDION, CARD } from '@/contentful/type/common';
type FaqProps = {
  params: { locale: string };
};
const Faq = async ({ params: { locale } }: FaqProps) => {
  const faqData = await FaqQuery(locale);
  const faqCollection = faqData?.faqPageCollection?.items[0];
  return (
    <PageLayout
      BreadcrumbData={faqCollection?.breadcrumb?.linksCollection?.items}
      bannerHeading={faqCollection?.innerBanner?.title}
    >
      <div className="containerXL">
        <div className={Styles.faq}>
          <Accordion>
            {faqCollection?.faqCollection?.items?.map(
              ({ title, content }: ACCORDION) => (
                <AccordionItem
                  className={Styles.accordionItems}
                  key={`menuCollection-${title}`}
                  content={content}
                  title={title}
                  openIcon="icon-plusicon"
                  closeIcon="icon-minusicon"
                />
              )
            )}
          </Accordion>
        </div>
      </div>
    </PageLayout>
  );
};
export default Faq;
