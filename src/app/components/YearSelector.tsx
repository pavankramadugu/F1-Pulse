import { Card, Dropdown } from 'flowbite-react';
import React, { useState } from 'react';

interface YearSelectorProps {
    selectedYear: number;
    setSelectedYear: (year: number) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({ selectedYear, setSelectedYear }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const years = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i);
    const filteredYears = years.filter((year) =>
        year.toString().includes(searchTerm)
    );

    const handleYearChange = (year: number) => {
        setSelectedYear(year);
    };

    return (
        <Card className="w-full p-4">
            <div className="flex items-center justify-center gap-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Select Year
                </h5>
                <div className="border-r border-gray-300 h-6 mr-3"></div>
                <div className="relative">
                    <Dropdown
                        inline={true}
                        className="pl-7"
                        dismissOnClick={false}
                        label={selectedYear.toString()}
                    >
                        <div className="p-3">
                            <label htmlFor="year-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="year-search"
                                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search year"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <ul
                            className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownSearchButton"
                            style={{ width: '250px' }} // Increase the width of the dropdown
                        >
                            {filteredYears.map((year) => (
                                <li key={year}>
                                    <div
                                        className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                                        onClick={() => handleYearChange(year)}
                                    >
                                        <input
                                            id={`checkbox-item-${year}`}
                                            type="checkbox"
                                            value=""
                                            checked={selectedYear === year}
                                            readOnly
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            htmlFor={`checkbox-item-${year}`}
                                            className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                        >
                                            {year}
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
            </div>
        </Card>
    );
};

export default YearSelector;
