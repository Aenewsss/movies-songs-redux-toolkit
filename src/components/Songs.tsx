import { useState } from "react";
import { addSong } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../types/types";

const Songs = () => {

    const dispatch = useDispatch()

    const songs = useSelector((state: IStore) => {
        return state.songs
    })
    const [hasSong, setHasSong] = useState(songs.length > 0);

    const newSong = () => {
        dispatch(addSong("Coração de Gelo"));
        setHasSong(true)
    }

    return (
        <div className="mt-5 d-flex flex-column gap-3">
            <div className="d-flex  gap-5">
                <h3 className="text-primary">SONGS</h3>

                <button className="btn btn-primary" onClick={newSong}>+</button>
            </div>

            <ul className="list-group">
                {
                    songs.map((song, i) => {
                        return <li className="fs-5" key={i}>{song}</li>
                    })
                }
            </ul>
            {
                !hasSong &&
                <p className="text-danger fw-bold fs-5">You don't have songs yet</p>
            }
        </div>
    );
}

export default Songs;