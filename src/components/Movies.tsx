import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../types/types";
import { addMovie, removeMovie } from "../store";

const Movies: FC<any> = ({hasReset}) => {
    const dispatch = useDispatch()
    
    const movies = useSelector((state: IStore) => {
        return state.movies
    })
    
    const [hasMovie, setHasMovie] = useState(movies.length > 0)

    const newMovie = () => {
        dispatch(addMovie("Matrix"));
        setHasMovie(true)
    }

    const handleRemoveMovie: any = (movie: string) => {
        dispatch(removeMovie(movie))
        if(movies.length === 1) setHasMovie(false)
    }

    useEffect(() => {
        setHasMovie(false)
    }, [hasReset])

    return (
        <div className="d-flex flex-column gap-3 ms-5">
            <div className="d-flex gap-5 justify-content-between">
                <h3 className="text-success fw-light m-0">MOVIES</h3>

                <button className="btn btn-outline-success" onClick={newMovie}>+</button>
            </div>

            <ul className="list-group d-flex flex-column gap-2">
                {
                    movies.map((movie, i) => {
                        return <li key={i} className="d-flex gap-5 text-white d-flex align-items-center">
                            {movie}
                            <button className="btn btn-default text-danger border-0" onClick={() => handleRemoveMovie(movie)}>x</button>
                        </li>
                    })
                }
            </ul>
            {
                !hasMovie &&
                <p className="text-danger fw-normal">You don't have movies yet</p>
            }
        </div>
    );
}

export default Movies;