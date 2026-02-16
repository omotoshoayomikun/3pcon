import { useState, useEffect } from 'react';

export const useFilter = (initialLimit = "10") => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [status, setStatus] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [limit, setLimit] = useState(initialLimit);
  const [page, setPage] = useState(1);

  // Debounce logic for the search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setPage(1); // Reset to page 1 when search changes
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const resetFilters = () => {
    setSearchTerm("");
    setStatus("");
    setFrom("");
    setTo("");
    setPage(1);
  };

  return {
    searchTerm, setSearchTerm,
    debouncedSearch,
    status, setStatus: (val: string) => { setStatus(val); setPage(1); },
    from, setFrom: (val: string) => { setFrom(val); setPage(1); },
    to, setTo: (val: string) => { setTo(val); setPage(1); },
    limit, setLimit: (val: string) => { setLimit(val); setPage(1); },
    page, setPage,
    resetFilters,
    // Params used for the API call
    filterParams: {
      q: debouncedSearch,
      status: status === "" ? "" : status,
      from,
      to,
      limit,
      page
    }
  };
};