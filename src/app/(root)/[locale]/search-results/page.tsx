import React, { useState } from 'react';
import Styles from './index.module.scss';
import PageLayout from '@/components/internalLayout';
import GlobalSearch from './_components/GlobalSearch';
type searchResultsProps = {
  params: { locale: string };
};

let data = [
    { url: '/', title: 'home' },
    { url: '', title: 'Search Results' },
];

const searchResults = async ({ params: { locale } }: searchResultsProps) => {
	

  return (
	<PageLayout BreadcrumbData={data} >
		<div className={`containerXL innerSpace ${Styles.searchResults}`}>
			<div className={`dFlex ${Styles.contain} `}>
				<GlobalSearch locale={locale} />
			</div>
		</div>
	</PageLayout>
  );
};
export default searchResults;
