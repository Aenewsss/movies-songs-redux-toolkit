import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../types/types";
import { addMovie } from "../store";

const Movies = () => {
    const dispatch = useDispatch()
    
    const movies = useSelector((state: IStore) => {
        return state.movies
    })
    
    const [hasMovie, setHasMovie] = useState(movies.length > 0)

    const newMovie = () => {
        dispatch(addMovie("Matrix"));
        setHasMovie(true)
    }
    return (
        <div className="mt-5 d-flex flex-column gap-3">
            <div className="d-flex gap-5">
                <h3 className="text-success">MOVIES</h3>

                <button className="btn btn-success" onClick={newMovie}>+</button>
            </div>

            <ul className="list-group">
                {
                    movies.map((movie, i) => {
                        return <li key={i}>{movie}</li>
                    })
                }
            </ul>
            {
                !hasMovie &&
                <p className="text-danger fw-bold fs-5">You don't have movies yet</p>
            }
        </div>
    );
}

export default Movies;