"use client"

import React, { useState } from 'react'
import { VscSettings } from "react-icons/vsc";
import Label from './Label';
import { Modal } from '../modal';
import { Button } from './Button/Button';
import { useFilter } from '../../../utils/useFilter';

interface FilterInterface {
  statusOption: { value: string, label: string }[];
  filters: ReturnType<typeof useFilter>;
  onApply: () => void;
}

function FilterSearch({ statusOption, filters, onApply }: FilterInterface) {
  const [toggleModel, setToggleModel] = useState(false)

  const handleApply = () => {
    onApply();
    setToggleModel(false);
  }

  const handleReset = () => {
    filters.resetFilters();
    // We delay the apply slightly to ensure state is cleared or 
    // simply call onApply to fetch with default empty params
    setTimeout(() => onApply(), 0);
    setToggleModel(false);
  }

  return (
    <>
      <div className="bg-gray-50 gap-2.5 relative w-full flex p-3 rounded-full border border-gray-100 dark:bg-white/[0.03] dark:border-gray-800">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={filters.searchTerm}
            onChange={(e) => filters.setSearchTerm(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full border border-gray-200 bg-white py-2 md:py-4 pl-5 pr-14 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-800 dark:bg-transparent dark:text-white/90 rounded-full transition-all"
          />

          <button className="w-8 h-8 md:w-11 md:h-11 flex justify-center items-center rounded-full absolute right-2 top-1/2 -translate-y-1/2 bg-[#09224E] text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z" fill="currentColor" />
            </svg>
          </button>
        </div>
        
        <button
          className="w-10 h-10 md:w-14 md:h-14 bg-white hover:bg-gray-100 flex justify-center items-center rounded-full border border-gray-200 text-gray-500 transition-colors shadow-sm"
          onClick={() => setToggleModel(true)}
        >
          <VscSettings size={22} />
        </button>
      </div>

      <Modal
        isOpen={toggleModel}
        onClose={() => setToggleModel(false)}
        className="max-w-[500px] p-6 lg:p-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-bold text-gray-800 text-xl dark:text-white/90">Filter Registrations</h4>
          <button onClick={() => setToggleModel(false)} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <div className='space-y-6'>
          {/* Status/Source Selection */}
          <div className="space-y-2">
            <Label>Registration Source</Label>
            <select 
               value={filters.status} 
               onChange={(e) => filters.setStatus(e.target.value)}
               className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500/20 outline-none"
            >
              <option value="">All Sources</option>
              {statusOption.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>From Date</Label>
              <input 
                type="date" 
                value={filters.from} 
                onChange={(e) => filters.setFrom(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <Label>To Date</Label>
              <input 
                type="date" 
                value={filters.to} 
                onChange={(e) => filters.setTo(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Entries Limit */}
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
            <Label className="mb-0">Show</Label>
            <select
              value={filters.limit} 
              onChange={(e) => filters.setLimit(e.target.value)}
              className='rounded-lg border border-gray-300 px-3 py-1 bg-white font-bold'
            >
              {[10, 20, 50, 100].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <Label className="mb-0">entries per page</Label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-10">
          <div className="flex-1">
            <Button
              title='Reset'
              handleClick={handleReset}
              btnStyle={{ width: "100%", backgroundColor: "#f3f4f6", color: "#374151" }}
            />
          </div>
          <div className="flex-1">
            <Button
              title='Apply Filters'
              handleClick={handleApply}
              btnStyle={{ width: "100%" }}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default FilterSearch;