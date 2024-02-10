import { useState } from "react";

function useSort(data, config) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder("asc");
            setSortBy(label);
            return;
        }

        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label);
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        } else if (sortOrder) {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    // 只有在sortOrder, sortBy為null時，才會進行排序
    // 不能直接對prop或state修改 > copy data prop
    // 利用sortBy找到對的sortValue，並用它來幫助我們進行排序
    let sortedData = data;
    if (sortOrder && sortBy) {
        // const column = config.find(column => column.label === sortBy);
        // 我們只要column中的sortValue，用解構方式取出
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === "asc" ? 1 : -1;

            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        })
    }

    return {
        sortBy,
        sortOrder,
        sortedData,
        setSortColumn
    }
}

export default useSort;