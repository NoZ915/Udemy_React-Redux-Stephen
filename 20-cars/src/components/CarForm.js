import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm(){
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return{
            name: state.form.name,
            cost: state.form.cost
        }
    })

    const handleNameChange = (event) => {
        //event.target.value
        dispatch(changeName(event.target.value));
    }
    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    }
    const handleSubmit = (event) => {
        //不希望submit表單時，重整整個頁面
        event.preventDefault();
        dispatch(addCar({ name, cost }));
    }

    return(
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="filed-group">
                    <div className="filed">
                        <label className="label">Name</label>
                        <input 
                            className="input is-expanded" 
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="filed">
                        <label className="label">Cost</label>
                        <input 
                            className="input is-expanded" 
                            value={cost || ""}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                </div>
                <div className="filed">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CarForm;