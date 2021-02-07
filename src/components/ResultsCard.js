import React from 'react'

const ResultsCard = ({movie}) => {
    return (
        <div className="grid-container">
            <div className="card">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}`} 
            />
        </div>
        </div>
    )
}

export default ResultsCard
