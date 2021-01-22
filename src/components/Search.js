import React, { useState, useEffect } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
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
    useEffect(() => {
        const array = wiki.filter((item) => {
            item.title[0].includes(searchTerm[0])
        })
        console.log(array)
    }, [searchTerm])
    return(
        <div className = "ui form">
            <div className="field">
                <label>Enter Search Term:</label>
                <input 
                className="input"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search