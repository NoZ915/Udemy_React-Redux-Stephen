import { useSelector } from "react-redux";

function CarValue(){
    const totalCost = useSelector(({ cars: { searchTerm, data } }) => {
        const filteredCars = data.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        //以下累加，也可以用JS中的reduce func實作:
        // return filteredCars.reduce((acc, car) => {
        //     return acc + car.cost
        // },0)
        let cost = 0;
        for(let car of filteredCars){
            cost += car.cost;
        }
        return cost;
    })

    return(
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    )
}

export default CarValue;