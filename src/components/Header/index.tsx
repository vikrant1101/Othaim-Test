import Topheader from './topheader';
import style from './index.module.scss';
import HeaderQuery from '@/contentful/queries/pages/header';
import BottomHeader from './BottomHeader';

const Header = async ({ locale }: any) => {
  const headerData = await HeaderQuery(locale == 'ar' ? 'ar' : '');
  const dataHeader = headerData?.headerCollection?.items[0];
  const { languageCollection, actionCollection, logo, menuCollection } = dataHeader;
  const defaultStore = dataHeader?.defaultStore;
  
  

  return (
    <header>
      <div className={`${style.mainCon} mainHeaderPanel`}>
        <Topheader
          locale={locale}
          style={style}
          languageCollection={languageCollection}
          actionCollection={actionCollection}
		  defaultStore={defaultStore}
        />
        <BottomHeader
          style={style}
          locale={locale}
          logo={logo}
          menuCollection={menuCollection}
          actionCollection={actionCollection}
          languageCollection={languageCollection}
        />
      </div>
    </header>
  );
};

export default Header;
