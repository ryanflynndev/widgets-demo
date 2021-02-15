import React, {useState} from 'react' 
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }

]

const items = [
    {
        title: 'What is React?',
        content: "React is a front end JavaScript framework"
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.'
    }
]

const showAccordion = () => {
    if(window.location.pathname === '/'){
        <Accordion items={items}/>
    } 
}

const showList = () => {
    if(window.location.pathname === '/list'){
        <Search/>
    } 
}

export default () => {
    const [selected, setSelected] = useState({label: 'None'})
    const [showDropdown, setShowDropdown] = useState(true)
    return (
        <div>
            {showAccordion()}
            {showList()}

        </div>
    )
}