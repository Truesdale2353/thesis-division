import { useState } from "react";

const useFilters = () => {
  const [filters, setFilters] = useState({});
  const getFilters = (filters) => {
    setFilters({ ...filters });
  };
  return [filters, getFilters];
};
export { useFilters };
