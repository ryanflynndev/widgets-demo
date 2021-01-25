import React, { useState, useEffect, useRef } from 'react' 

const Dropdown = ({ options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false)
    const ref = useRef()
    useEffect(() => {{
        document.body.addEventListener('click', () => {
            if(ref.current && ref.current.contains(e.target)){
                return;
            }
            setOpen(false)
        })
    }}, [])
    const renderedOptions = options.map((item) => {
        if(item.value === selected.value){
            return null
        }
        return (
            <div key={item.value} className="item" onClick={() => onSelectedChange(item)}>{item.label}</div>
        )
    })
    
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`} >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown