'use client'
import React, { Suspense, useEffect, useState } from 'react';
import Styles from './index.module.scss';
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';
import Dropdown from '@/components/DropDown';
import Link from 'next/link';
import Loader from '@/components/Loader';
import { getDeviceType } from '@/util/helpers';
import { useSearchParams } from 'next/navigation'
 

const searchAll = [
	{
	  "id": 1,
	  "title": "Lorem Ipsum Landscape",
	  "description": "A beautiful scenic landscape depicting calm and serenity, inspired by the concept of 'Lorem ipsum'.",
	  "imageUrl": "/img/default-Img.png",
	  "altText": "A serene landscape with mountains and sky.",
	  "slug":'/'
	},
	{
	  "id": 2,
	  "title": "Consectetur Adipiscing Nature",
	  "description": "Nature flourishing with green trees and peaceful surroundings, representing the harmony in 'consectetur adipiscing'.",
	  "imageUrl": "/img/default-Img.png",
	  "altText": "A lush forest with sunlight filtering through the trees.",
	  "slug":'/'
	},
	{
	  "id": 3,
	  "title": "Eiusmod Tempor Architecture",
	  "description": "Modern architecture that embodies the flow and rhythm of 'eiusmod tempor', showcasing sleek design.",
	  "imageUrl": "/img/default-Img.png",
	  "altText": "A modern building with clean lines and geometric shapes.",
	  "slug":'/'
	},
	{
	  "id": 4,
	  "title": "Incididunt Urban Life",
	  "description": "An urban cityscape captured during the 'incididunt', where the fast-paced life meets moments of reflection.",
	  "imageUrl": "/img/default-Img.png",
	  "altText": "A bustling city with people walking and cars driving by.",
	  "slug":'/'
	},
	{
		"id": 5,
		"title": "Lorem Ipsum Landscape",
		"description": "A beautiful scenic landscape depicting calm and serenity, inspired by the concept of 'Lorem ipsum'.",
		"imageUrl": "/img/default-Img.png",
		"altText": "A serene landscape with mountains and sky.",
		"slug":'/'
	  },
	  {
		"id": 6,
		"title": "Consectetur Adipiscing Nature",
		"description": "Nature flourishing with green trees and peaceful surroundings, representing the harmony in 'consectetur adipiscing'.",
		"imageUrl": "/img/default-Img.png",
		"altText": "A lush forest with sunlight filtering through the trees.",
		"slug":'/'
	  },
	  {
		"id": 8,
		"title": "Incididunt Urban Life",
		"description": "An urban cityscape captured during the 'incididunt', where the fast-paced life meets moments of reflection.",
		"imageUrl": "/img/default-Img.png",
		"altText": "A bustling city with people walking and cars driving by.",
		"slug":'/'
	  },
	  {
		"id": 7,
		"title": "Eiusmod Tempor Architecture",
		"description": "Modern architecture that embodies the flow and rhythm of 'eiusmod tempor', showcasing sleek design.",
		"imageUrl": "/img/default-Img.png",
		"altText": "A modern building with clean lines and geometric shapes.",
		"slug":'/'
	  }
]
const sortByOptions = [
    { id: 'TITLE_AZ', label: 'TITLE (A-Z)',value: 'title_Asc' },
    { id: 'TITLE_ZA', label: 'TITLE (Z-A)',value: 'title_Desc'},
    { id: 'DATE_NEWEST', label: 'Date (Newest)',value: 'date_Desc'},
    { id: 'DATE_OLDEST', label: 'Date (Oldest)',value: 'date_Asc'}
];
interface NewsData {
	total: number;
	per_page: number;
	data: any[];
  }
export const GlobalSearchs: React.FC<any> = ({ locale }) => {
	const searchParams = useSearchParams();
  	const querypram = searchParams.get('query');
	console.log(querypram,'querypram')
	const [newsData, setNewsData] = useState<any[]>([]);
	const [storeData, setStoreData] = useState<any[]>([]);
	const [selectedSort, setSelectedSort] = useState('');
	const [searchApi, setSearchApi] = useState<any[]>([]);
	const [filteredData, setFilteredData] = useState(searchApi);
	const [loading, setLoading] = useState(true); 
	const [query, setQuery] = useState(querypram);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 6;
	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};
	const startIndex = (currentPage - 1) * pageSize;
	const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);
	
	useEffect(() => {
		setQuery(querypram)
		if (query) {
			const matchedData = searchApi?.filter((item) =>
				item.title.toLowerCase().includes(query.toLowerCase())
			);
				setFilteredData(matchedData);
				console.log(matchedData,'matchedData')
			} else {
				setFilteredData(searchApi);
		}
	},[querypram,searchApi])
	useEffect(() => {
		setFilteredData(searchApi)
	},[searchApi])

	const fetchStoreData = async () => {
		//setLoading(true); 
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/store`, {
				headers: {
					language: locale || 'en',
				},
			});

			if (!res.ok) {
				throw new Error('Failed to fetch data');
			}

			const allStoreData = await res.json();
			setStoreData(allStoreData?.stores);
		} catch (error) {
			console.error('Error fetching store data:', error);
		} finally {
			//setLoading(false); 
		}
	};
	const fetchAllNewsData = async () => {
		try {
		  const allData: any[] = [];
		  let currentPage = 1;
		  let lastPage = false;
		  while (!lastPage) {
			const res = await fetch(`https://estore.othaimmarkets.com/api/v18/news?page=${currentPage}`, {
			  headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				os: getDeviceType(),
				'language': locale,
			  },
			});
			const data = await res.json();
			//console.log(`Fetched data from page ${currentPage}:`, data.data);
			allData.push(...data.data);
			lastPage = currentPage >= data.last_page;
			currentPage += 1;
		  }
	  
		  //console.log('Combined data from all pages:', allData);
		  setNewsData(allData);
		} catch (error) {
		  console.error("Error fetching news data:", error);
		} finally {
		  //setLoading(false);
		}
	};
	useEffect(() => {
		fetchStoreData();
		fetchAllNewsData();
	}, []);

	useEffect(() => {
		if (storeData?.length > 0 && newsData?.length > 0) { 
			setLoading(true); 
			const formattedStoreData = storeData?.map((ele) => ({
				id: ele.id,
				title: ele.StoreName,
				slug: '/store',
			}));
			const allNewsData = newsData?.map((ele) => ({
				id: ele.id,
				title: ele.title,
				slug: `/news/${ele.id}`,
				imageUrl: ele.pic,
				date: ele?.date
			}));
			
			setSearchApi([...formattedStoreData, ...searchAll, ...allNewsData]);
			setLoading(false); 
		}
	}, [storeData,newsData]);

	const handleFilter = (searchQuery: string) => {
		setQuery(searchQuery);
		console.log(searchQuery,'searchQuery')
		if (searchQuery) {
		  const matchedData = searchApi?.filter((item) =>
			item.title.toLowerCase().includes(searchQuery.toLowerCase())
		  );
		  setFilteredData(matchedData);
		  console.log(matchedData,'matchedData')
		} else {
		  setFilteredData(searchApi);
		}
	};



	const handleSortChange = (value: string) => {
		setSearchApi(searchApi)
		const selectedOption = sortByOptions.find(option => option.label === value);
		setSelectedSort(value);

		setFilteredData((prev) => {
			switch (selectedOption?.value) {
				case 'title_Asc':
					return [...prev].sort((a, b) => a.title.localeCompare(b.title));
				case 'title_Desc':
					return [...prev].sort((a, b) => b.title.localeCompare(a.title));
				case 'date_Desc':
					return [...prev].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
				case 'date_Asc':
					return [...prev].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
				default:
					return [...searchApi];
			}
		});
	};
	  

  return (
	<>
	   
		<div className={Styles.searchSidebar}>
			<div className={`rowFlex`}>
				<div className={`column ${Styles.inputCon}`}>
					<label>Search</label>
					<SearchBar onSearch={handleFilter} className={'SearchGlobal'}  placeholder="Search" />
				</div>
			</div>
			<div className={`rowFlex`}>
				<div className={`column ${Styles.dropdown} ${Styles.inputCon}`}>
					<label>Sort by</label>
					<Dropdown
						label="Sort by"
						options={sortByOptions?.map((itm)=>itm?.label)}
						value={selectedSort}
						id="sortDropdown"
						onChange={value => {
							handleSortChange(value)
						}}
					/>
				</div>
			</div>
		</div>
		<div className={`${Styles.searchResultsContent}`}>
			{loading && <Loader className={Styles.loaderS} size="Medium" />}
			<div className={Styles.searchResultsWrap}>
				<p>Showing <span>{filteredData?.length}</span> results</p>
				{paginatedData?.length > 0 ? <> <div className={Styles.searchResultsList}>
					{paginatedData?.map((item: any, index: number) => (
						<div key={index} className={`${Styles.searchResultsItem} dFlex`}>
							<div className={`${Styles.searchResultsItemImg}`}>
								<img src={item.imageUrl ? item.imageUrl : '/img/default-Img.png'} alt="" />
							</div>
							<div className={Styles.searchResultsItemContent}>
								<Link href={item.slug}>{item.title}</Link>
							</div>
						</div>
					))}
				</div>
				<div className={Styles.pagination}>
					<div className={Styles.paginationList}>
						<Pagination  totalCount={filteredData?.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
					</div>
				</div> </> : ''}
			</div>
		</div>
		
	</>
  );
};


export default function GlobalSearch({locale} : any) {
  return (
	<Suspense>
		<GlobalSearchs locale={locale}/>
	</Suspense>
  )
}


