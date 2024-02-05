const data = [
    {weight: 15, cost: 5, name: "Onion"},
    {weight: 10, cost: 2, name: "Tomato"},
    {weight: 4, cost: 8, name: "Carrot"}
];

function getSortValue(vegitable){
    return vegitable.cost;
};

const sortOrder = "ascending"
data.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);
    const reverseOrder = sortOrder === "ascending" ? 1 : -1;

    if(typeof valueA === "string"){
        return valueA.localeCompare(valueB) * reverseOrder;
    }else{
        return (valueA - valueB) * reverseOrder;
    }
})