import React, { useState, useContext } from 'react'
import ResultsCard from './ResultsCard';

const SearchField = async () => {
    const [ searchData, setSearchData ] = useState("")
    const [ results, setResults ] = useState([]);

    const onChangeHandler = (e) => {
        setSearchData(e.target.value)

        fetch(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                if(!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([])
                }
            })
    }

    const onClickHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className="search-field">
            <form className="search-form">
                <input 
                placeholder="search here..."
                value={searchData}
                type="text"
                onChange={onChangeHandler}
                />
                <br />
                <button className="btn btn-search" onClick={onClickHandler}>Search</button>
            </form>

            {results.length > 0 && (
                <div className="moviesGridList">
                    {results.map((movie) => {
                        <ResultsCard key={movie.id} movie={movie} />
                    })}
                </div>
            )}
        </div>

    )
}

export default SearchField
