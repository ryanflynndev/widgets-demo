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

export default () => {
    const [selected, setSelected] = useState({label: 'None'})
    return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            <Dropdown selected={selected}
                options={options}
                onSelectedChange={setSelected}
                />
        </div>
    )
}