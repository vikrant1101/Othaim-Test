'use client';
import Button from '@/components/Button';
import Dropdown from '@/components/DropDown';
import { useForm, Controller } from 'react-hook-form';
import Styles from './index.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useState } from 'react';
import EventCard from '@/components/EventCard';
import Pagination from '@/components/Pagination';

// Define the event structure
interface EventData {
  date: string;
  description: string;
  
}

const keywords = ['Z', 'G', 'A'];

const eventData: EventData[] = [
  {
    date: '2024-09-04',
    description: 'Abdullah Al Othaim Markets Co. Announces an update on Appointment of a Financial Advisor...',
  },
  {
    date: '2023-08-12',
    description: 'Abdullah Al Othaim Markets Co. announces a new partnership for expansion...',
  },
  {
    date: '2022-11-30',
    description: 'Abdullah Al Othaim Markets Co. celebrates 50 years of success...',
  },
  {
    date: '2024-06-18',
    description: 'The Fourth Milling Company prepares for public offering...',
  },
  {
    date: '2023-06-18',
    description: 'The Fourth Milling Company prepares for public offering...',
  },
  {
    date: '2024-09-04',
    description: 'Abdullah Al Othaim Markets Co. Announces an update on Appointment of a Financial Advisor...',
  },
  {
    date: '2023-09-04',
    description: 'Abdullah Al Othaim Markets Co. Announces an update on Appointment of a Financial Advisor...',
  },
  {
    date: '2023-06-04',
    description: 'Abdullah Al Othaim Markets Co. G Z Announces an update on Appointment of a Financial Advisor...',
  },
  {
    date: '2023-08-04',
    description: 'Abdullah Al Othaim Markets Co. G Z Announces an update on Appointment of a Financial Advisor...',
  },
  {
    date: '2023-08-12',
    description: 'Abdullah Al Othaim Markets Co. announces a new partnership for expansion...',
  },
  {
    date: '2022-11-30',
    description: 'Abdullah Al Othaim Markets Co. celebrates 50 years of success...',
  },
  {
    date: '2024-06-18',
    description: 'The Fourth Milling Company prepares for public offering...',
  },
  {
    date: '2024-09-04',
    description: 'Abdullah Al Othaim Markets Co. Announces an update on Appointment of a Financial Advisor...',
  },
  {
    date: '2023-08-12',
    description: 'Abdullah Al Othaim Markets G Co. announces a new partnership for expansion...',
  },
  {
    date: '2023-08-12',
    description: 'Abdullah Al Othaim Markets G Co. announces a new partnership for expansion...',
  },
  {
    date: '2023-08-12',
    description: 'Abdullah Al Othaim Markets G Co. announces a new partnership for expansion...',
  },
  {
    date: '2023-08-12',
    description: 'Abdullah Al Othaim Markets G Co. announces a new partnership for expansion...',
  },
  {
    date: '2023-08-12',
    description: 'Abdullah Al Othaim Markets G Co. announces a new partnership for expansion...',
  },
  {
    date: '2023-08-12',
    description: 'Abdullah Al Othaim Markets G Co. announces a new partnership for expansion...',
  },
  {
    date: '2023-08-12',
    description: 'Abdullah Al Othaim Markets G Co. announces a new partnership for expansion...',
  },
  {
    date: '2022-11-30',
    description: 'Abdullah Al Othaim Markets Z Co. celebrates 50 years of success...',
  },
  {
    date: '2024-06-18',
    description: 'The Fourth Milling Company G prepares for public offering...',
  },
];

type FormValues = {
  startDate: Date | null;
  endDate: Date | null;
  keyword: string;
  year: string;
};
type PressReleaseFormProps = {
  locale: string;
};
const PressReleaseForm: React.FC<PressReleaseFormProps> = ({ locale }) => {
  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      keyword: '',
      startDate: null,
      endDate: null,
      year: '',
    },
  });
  const [filteredEvents, setFilteredEvents] = useState<EventData[]>(eventData);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const filterEvents = (data: FormValues) => {
    const { keyword, startDate, endDate, year } = data;

    const filtered = eventData.filter(event => {
      const eventDate = new Date(event.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      const matchesKeyword = keyword ? event.description.includes(keyword) : true;
      const matchesDateRange = (!start || eventDate >= start) && (!end || eventDate <= end);
      const matchesYear = year ? eventDate.getFullYear().toString() === year : true;
      return matchesKeyword && matchesDateRange && matchesYear;
    });

    setFilteredEvents(filtered);
    setCurrentPage(1);
  };

  const onSubmit = (data: FormValues) => {
    filterEvents(data); // Filter events when form is submitted
  };
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const years = Array.from(
    new Set(eventData.map(event => new Date(event.date).getFullYear().toString()))
  );

  useEffect(() => {
    const currentValues = watch(); 
    filterEvents(currentValues); 
  }, [locale]);

  return (
    <>
      <div className={Styles.searchCons}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`justifyContentBetween ${Styles.gap30}`}
        >
          <div className="mnMd12 rowFlex">
            <div className={`columnMd12 ${Styles.gap20}`}>
              <div className={`${Styles.innerPanel} rowFlex rowGutters12 gap24`}>
                <div className={Styles.inputPanel}>
                  <Controller
                    name={'keyword'}
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        id={'keyword-dropdown'}
                        label="Keyword"
                        options={keywords}
                        {...field}
                      />
                    )}
                  />
                </div>

                <div className={Styles.inputPanel}>
                  <div className={`datePickInput ${Styles.datePick}`}>
                    <Controller
                      name="startDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          placeholderText="From"
                          dateFormat="yyyy-MM-dd"
                          className={Styles.datePickInput}
                        />
                      )}
                    />
                  </div>
                </div>

                <div className={Styles.inputPanel}>
                  <div className={`datePickInput ${Styles.datePick}`}>
                    <Controller
                      name="endDate"
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          placeholderText="To"
                          dateFormat="yyyy-MM-dd"
                          className={Styles.datePickInput}
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="dFlex justifyContentEndMd">
                  <Button
                    className={Styles.searchBtn}
                    label="Search"
                    varient="Primary"
                    type={'Submit'}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className={`${Styles.filterPanel} dFlex gap24 alignItemsCenterMd`}>
        <label>Filter by year</label>
        <div className={Styles.filterInnerPanel}>
          <Controller
            name={'year'}
            control={control}
            render={({ field }) => (
              <Dropdown
                id={'year-dropdown'}
                label="Select Year"
                options={years}
                {...field}
                onChange={(value) => {
                  field.onChange(value); 
                  const currentValues = watch(); 
                  filterEvents({ ...currentValues, year: value }); 
                }}
              />
            )}
          />
        </div>
      </div>

      <div className={`${Styles.pressReleasePanel} rowGutters12 rowFlex`}>
  {paginatedEvents.length === 0 ? (
    <p>{locale === 'ar' ? 'تحميل المزيد' : 'No results found'}</p>
  ) : (
    paginatedEvents.map((event, index) => (
      <div key={index} className={`${Styles.cardPanel} columnLg4 columnMd6 mb24`}>
        <EventCard date={new Date(event.date).toLocaleDateString('en-GB')}>
          <p className={Styles.descriptionBox}>{event.description}</p>
        </EventCard>
      </div>
    ))
  )}
</div>
      <Pagination
        onPageChange={handlePageChange}
        totalCount={filteredEvents.length}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </>
  );
};

export default PressReleaseForm;
