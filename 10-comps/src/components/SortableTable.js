import { GoArrowUp, GoArrowDown } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
    const { config, data } = props;
    const {
        sortBy,
        sortOrder,
        sortedData,
        setSortColumn
    } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) return column;
        return {
            ...column,
            header: () =>
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
        }
    })

    return (
        <Table {...props} data={sortedData} config={updatedConfig} />
    )
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        //同時出現上下箭頭
        return (
            <div>
                <div>
                    <GoArrowUp />
                </div>
                <div>
                    <GoArrowDown />
                </div>
            </div>
        )
    }
    if (sortOrder === null) {
        //同時出現上下箭頭
        return (
            <div>
                <GoArrowUp />
                <GoArrowDown />
            </div>
        )
    } else if (sortOrder === "asc") {
        //出現向上箭頭
        return (
            <div>
                <GoArrowUp />
            </div>
        )
    } else if (sortOrder === "desc") {
        //出現向下箭頭
        return (
            <div>
                <GoArrowDown />
            </div>
        )
    }
}

export default SortableTable;