import React, { useReducer } from 'react'

import moviesContext from './moviesContext'
import moviesReducer from './moviesReducer'

const initialState = {
    movies : [],
    singleMovie : {}
}

const MoviesState = (props) => {
    const [state, dispatch] = useReducer(moviesReducer, initialState)

    // actions
    

    return (
        <moviesContext.Provider value={{
            movies : state.movies,
            singleMovie : state.singleMovie
        }}>
            {props.childern}
        </moviesContext.Provider>
    )
}

export default MoviesState
