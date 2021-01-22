import React from 'react' 
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
    return (
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            <Dropdown options={options}/>
        </div>
    )
}