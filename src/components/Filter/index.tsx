"use client";
import { ChangeEvent } from 'react';

interface FilterProps<T> {
  label?: string;
  value?: T;
  options: T[];
  onChange: any;
}

export default function Filter<T extends string | number>({ label, value, options, onChange }: FilterProps<T>) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value === '' ? '' : e.target.value;
    onChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select id={label} value={value} onChange={handleChange}>
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
