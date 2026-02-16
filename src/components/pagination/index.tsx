"use client";

import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalResults: number;
    resultsPerPage: number;
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    totalResults,
    resultsPerPage
}: PaginationProps) {
    const startResult = (currentPage - 1) * resultsPerPage + 1;
    const endResult = Math.min(currentPage * resultsPerPage, totalResults);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-white border-t-0 border-gray-200 rounded-b-xl dark:bg-white/[0.03] dark:border-white/[0.05]">
            {/* Results Info */}
            <div className="mb-4 sm:mb-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Showing <span className="font-medium text-gray-900 dark:text-white">{totalResults === 0 ? 0 : startResult}</span> to{" "}
                    <span className="font-medium text-gray-900 dark:text-white">{endResult}</span> of{" "}
                    <span className="font-medium text-gray-900 dark:text-white">{totalResults}</span> results
                </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border border-gray-200 text-gray-600 transition-all hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5"
                >
                    <FiChevronLeft size={18} />
                </button>

                <div className="flex items-center gap-1">
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        // Logic to show limited page numbers if totalPages is high
                        if (
                            totalPages <= 5 ||
                            pageNumber === 1 ||
                            pageNumber === totalPages ||
                            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                        ) {
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => onPageChange(pageNumber)}
                                    className={`min-w-[36px] h-9 rounded-xl text-sm font-medium transition-all ${
                                        currentPage === pageNumber
                                            ? "bg-brand-500 text-white shadow-md shadow-brand-500/20"
                                            : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/5"
                                    }`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        } else if (
                            pageNumber === currentPage - 2 ||
                            pageNumber === currentPage + 2
                        ) {
                            return <span key={pageNumber} className="px-1 text-gray-400 text-xs">...</span>;
                        }
                        return null;
                    })}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border border-gray-200 text-gray-600 transition-all hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5"
                >
                    <FiChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}