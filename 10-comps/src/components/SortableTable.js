import { useState } from "react";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import Table from "./Table";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config, data } = props;

    const handleClick = (label) => {
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

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) return column;
        return {
            ...column,
            header: () =>
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
        }
    })

    // 只有在sortOrder, sortBy為null時，才會進行排序
    // 不能直接對prop或state修改 > copy data prop
    // 利用sortBy找到對的sortValue，並用它來幫助我們進行排序
    let sortedData = data;
    if(sortOrder && sortBy){
        // const column = config.find(column => column.label === sortBy);
        // 我們只要column中的sortValue，用解構方式取出
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === "asc" ? 1 : -1;

            if(typeof valueA === "string"){
                return valueA.localeCompare(valueB) * reverseOrder;
            }else{
                return (valueA - valueB) * reverseOrder;
            }
        })
    }

    return (
        <div>
            {sortOrder} - {sortBy}
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    )
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        //同時出現上下箭頭
        return(
            <div>
                <GoArrowDown />
                <GoArrowUp />
            </div>
        )
    }
    if(sortOrder === null){
        //同時出現上下箭頭
        return(
            <div>
                <GoArrowDown />
                <GoArrowUp />
            </div>
        )
    }else if(sortOrder === "asc"){
        //出現向上箭頭
        return(
            <div>
                <GoArrowUp />
            </div>
        )
    }else if(sortOrder === "desc"){
        //出現向下箭頭
        return(
            <div>
                <GoArrowDown />
            </div>
        )
    }
}

export default SortableTable;