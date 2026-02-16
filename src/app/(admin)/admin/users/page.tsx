"use client"

import FilterSearch from '@/components/Form/FilterSearch'
import React, { useEffect, useState, useCallback } from 'react'
import { useFilter } from '../../../../../utils/useFilter';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/table';
import { CgSpinner } from 'react-icons/cg';
import { Pagination } from '@/components/pagination';
import { UseGetApi } from '../../../../../utils/Action';
import { IUser } from '../../../../../utils/types';

function Users() {
    // 1. Initialize your custom hook
    const filters = useFilter("10");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<IUser[]>([]);
    const [meta, setMeta] = useState({
        total: 0,
        page: 1,
        pages: 1
    });

    // 2. Optimized Fetch Function
    const fetchUsers = useCallback(async () => {
        try {
            setLoading(true);

            const query = new URLSearchParams({
                page: filters.page.toString(),
                limit: filters.limit,
                q: filters.filterParams.q,
                status: filters.filterParams.status,
                from: filters.filterParams.from,
                to: filters.filterParams.to,
            }).toString();

            const res = await UseGetApi(`api/webinar?${query}`);

            if (res.success) {
                setData(res.data);
                setMeta(res.pagination);
            }
        } catch (error) {
            console.error("Failed to fetch users", error);
        } finally {
            setLoading(false);
        }
        // FIX: Destructure the values so the reference stays stable
    }, [
        filters.filterParams.q,
        filters.filterParams.status,
        filters.filterParams.from,
        filters.filterParams.to,
        filters.page,
        filters.limit
    ]);

    // 3. Trigger fetch on filter change
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <>
            <div className="mb-5 mt-5">
                <FilterSearch
                    filters={filters}
                    onApply={fetchUsers}
                    statusOption={[
                        { label: "LinkedIn", value: "LinkedIn" },
                        { label: "Twitter", value: "Twitter" },
                        { label: "Instagram", value: "Instagram" },
                        { label: "Facebook", value: "Facebook" },
                        { label: "Friend", value: "Friend" },
                    ]}
                />
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div className="max-w-full overflow-x-auto">
                    <Table>
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">S/N</TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">FULL NAME</TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">CONTACT</TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">SOURCE</TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">EVENT TITLE</TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">REG. DATE</TableCell>
                            </TableRow>
                        </TableHeader>

                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="p-20 text-center">
                                        <div className='w-full flex justify-center items-center gap-2 text-gray-500'>
                                            <CgSpinner size={25} className="animate-spin" />
                                            <span>Loading registrations...</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : data.length > 0 ? (
                                data.map((item, index) => (
                                    <TableRow key={item._id} className="hover:bg-gray-50 transition-colors">
                                        <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                                            {(filters.page - 1) * parseInt(filters.limit) + (index + 1)}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-theme-sm">
                                            <div className="font-medium text-gray-800 dark:text-white/90">{item.firstname} {item.lastname}</div>
                                            <div className="text-xs text-gray-400">{item.email}</div>
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm">{item.phone}</TableCell>
                                        <TableCell className="px-4 py-3">
                                            <span className="px-2 py-1 text-[10px] font-bold rounded-md bg-gray-100 text-gray-600 uppercase">
                                                {item.source || "Other"}
                                            </span>
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm">
                                            <div className="max-w-[200px] truncate" title={item.eventId?.title}>
                                                {item.eventId?.title || "N/A"}
                                            </div>
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm">
                                            {new Date(item.createdAt).toLocaleDateString('en-GB')}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="p-10 text-center text-gray-400">No records match your filters.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                    <div className="p-5 border-t border-gray-100">
                        <Pagination
                            currentPage={filters.page}
                            totalPages={meta.pages}
                            totalResults={meta.total}
                            resultsPerPage={parseInt(filters.limit)}
                            onPageChange={(newPage) => filters.setPage(newPage)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users;