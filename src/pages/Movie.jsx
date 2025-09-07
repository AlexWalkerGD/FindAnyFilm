import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard";
import './Movie.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const{id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) =>{
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
    };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US" , {
            style: "currency", 
            currency: "USD",
        })
    };

    useEffect(() =>{
        const moviesUrl = `${moviesURL}${id}?${apiKey}`;
        getMovie(moviesUrl)
    },[]);


    return <div className="movie-page">
        {movie && (
            <>
                <MovieCard movie={movie} showLink ={false} />
                <div className="dataMovie">
                    
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                    <h3>
                      <BsWallet2 /> Budget:
                    </h3>
                    <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div className="info">
                        <h3>
                        <BsGraphUp /> Revenue:
                        </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className="info">
                        <h3>
                        <BsHourglassSplit /> Duration:
                        </h3>
                        <p>{movie.runtime} Minutes</p>
                    </div>
                    <div className="info">
                        <h3>
                        <BsFillFileEarmarkTextFill /> Description:
                        </h3>
                        <p className="description">{movie.overview}</p>
                    </div>

                </div>
            </>
        )}
        </div>
};

export default Movie;