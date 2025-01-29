import { useState } from "react";

type SortConfig<T> = {
  key: keyof T;
  direction: "ascending" | "descending";
};

const useSortableTable = <T>(initialData: T[]) => {
  const [data, setData] = useState<T[]>(initialData);
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({
    key: "name" as keyof T,
    direction: "ascending",
  });

  const sortTable = (key: keyof T) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedData = [...data].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      const comparison =
        typeof aValue === "string" && typeof bValue === "string"
          ? aValue.localeCompare(bValue)
          : aValue < bValue
          ? -1
          : aValue > bValue
          ? 1
          : 0;

      return direction === "ascending" ? comparison : -comparison;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return { data, sortTable, sortConfig };
};

export default useSortableTable;
