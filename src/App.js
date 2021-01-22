import React from 'react' 
import Accordion from './components/Accordion'
import Search from './components/Search'

const wiki = [
    {
        title: 'Computer Programming',
        pageId: 5311,
        snippet: 'bla blaaa bla bla bla bla blaaa'
    },
    {
        title: 'Program',
        pageId: 23771,
        snippet: 'bla blaaa bla bla bla bla blaaa'
    },
    {
        title: 'Programming Language',
        pageId: 23015,
        snippet: 'bla bla bla'
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
            <Search />
        </div>
    )
}