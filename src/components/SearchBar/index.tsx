'use client';
import React, { useEffect, useState } from 'react';
import Style from './index.module.scss';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Loader from '../Loader';

interface Props {
  placeholder?: string;
  searchAriaLabel?: string;
  searchLabel?: string;
  searchId?: string;
  className?: string;
  data?: any;
  searchQuery?: any;
  modalTrue?: boolean;
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<Props> = (props: Props) => {
  const searchPlaceholder = props?.placeholder || 'Search';
  const classProps = props?.className;
  const ariaLabel = props?.searchAriaLabel || 'Click here to search something';
  const searchLabel = props?.searchLabel || 'search';
  const searchId = props?.searchId || 'search';
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('query') || '';
  const [query, setQuery] = useState(queryParam);
  const [isLoading, setLoading] = useState();
  useEffect(() => {
    if (queryParam) {
      handleSearch(queryParam);
    }
  }, [queryParam]);

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    const scroll = window?.screenY;
    setQuery(term);
    if (query) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    router?.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search-results?query=${query}`);
	if (props.onSearch) {
		props.onSearch(query);
	}
  };

  
  return (
    <div className={`${classProps} ${Style.searchWrapper}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor={searchId} className={`sr-only`}>
          {searchLabel}
        </label>
        <input
          className={Style.searchInput}
          type="search"
          placeholder={searchPlaceholder}
          value={query}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          id={searchId}
        />
        {!isLoading ? (
          <button
            className={Style.searchBtn}
            aria-label={ariaLabel}
            type="submit"
          >
            <span className="icon-search"></span>
          </button>
        ) : (
          <Loader className={Style.loaderOnSearch} size="Small" />
        )}
      </form>
    </div>
  );
};

export default SearchBar;
