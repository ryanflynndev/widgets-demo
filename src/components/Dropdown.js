import React from 'react' 

const Dropdown = ({ options, selected, onSelectedChange }) => {

    const renderedOptions = options.map((item) => {
        if(item.value === selected.value){
            return null
        }
        return (
            <div key={item.value} className="item" onClick={() => onSelectedChange(item)}>{item.label}</div>
        )
    })

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div className= "ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown