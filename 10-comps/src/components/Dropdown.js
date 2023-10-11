import { useState } from "react";

function Dropdown({ options, value, onChange }){
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const handleOptionsClick = (option) => {
        setIsOpen(false); //點擊其中一個option，整個選單會關起來
        onChange(option);
    }
    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionsClick(option)} key={ option.value }>{ option.label }</div>
    })

    return(
        <div>
            <div onClick={ handleClick }>
                {value?.label || "Select..."}
            </div>
            {isOpen && <div>{ renderedOptions }</div>}
        </div>)
}

export default Dropdown;
