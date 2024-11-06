'use client';
import React from 'react';
import Styles from './index.module.scss';
import useEqualHeight from '@/util/hooks/useEqualHeight';

interface EventCardProps {
  heading?: string; 
  headingClassName?: string; 
  date?: string; 
  badge?: string; 
  children?: React.ReactNode; 
  className?: string; // Dynamic class names
}

const EventCard: React.FC<EventCardProps> = ({ 
  heading, 
  headingClassName,
  date, 
  badge, 
  children,
  className 
}) => {
  // Use the hook to equalize heights with an optional delay
  useEqualHeight(['equalHeading', 'equalContent', 'equalCard'], 100);

  return (
    <div className={`${Styles.eventCard} equalCard ${className || ''}`}>
      {(date || badge) && (
        <div className={`${Styles.dateBadge} date-badge rowFlex alignItemsCenter justifyContentBetween`}>
          {date && (
            <div className={`${Styles.datePanel} date justifyContentCenter alignItemsCenter dFlex gap10`}>
              <i className='icon-calendar-alt'></i>
              <p className='mb0'>{date}</p>
            </div>
          )}
          {badge && <span className={`${Styles.badge}`}>{badge}</span>}
        </div>
      )}
      {heading && (
        <h4 className={`${Styles.heading} ${headingClassName} equalHeading`}>
          {heading}
        </h4>
      )} 
      <div className={`content ${Styles.content} equalContent`}>
        {children}
      </div>
    </div>
  );
};

export default EventCard;
