'use client';
import React, { useState, useRef, useEffect } from 'react';
import Styles from './index.module.scss';

interface DropdownProps {
  label: string;
  options: any[];
  value: string;
  id: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ id, label, options, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<any>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'ArrowDown') {
      setFocusedIndex((prev) => (prev + 1) % options.length);
    } else if (event.key === 'ArrowUp') {
      setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
    } else if (
      event.key === 'Enter' &&
      focusedIndex >= 0 &&
      focusedIndex < options.length
    ) {
      handleOptionSelect(options[focusedIndex]);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen && focusedIndex >= 0) {
      const focusedElement = document.getElementById(`option-${focusedIndex}`);
      if (focusedElement) {
        focusedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [focusedIndex, isOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={Styles.dropdown} ref={dropdownRef}>
      <button
        id={id}
        type="button"
        onClick={toggleDropdown}
        className={Styles.dropdownToggle}
      >
        {selectedValue || label} 
        <span className="icon-chevron-down" />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby="dropdown-button"
          tabIndex={-1}
          className={Styles.dropdownMenu}
        >
          {options.map((option, index) => (
            <li
              id={`option-${index}`}
              key={option}
              role="option"
              aria-selected={selectedValue === option}
              onClick={() => {
                handleOptionSelect(option);
                onChange(option);
              }}
              onMouseEnter={() => setFocusedIndex(index)}
              className={`dropdown-item ${focusedIndex === index ? 'focused' : ''}`}
              tabIndex={focusedIndex === index ? 0 : -1}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
