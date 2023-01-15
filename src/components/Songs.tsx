import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../types/types";
import { addSong, removeSong } from "../store";

const Songs: FC<any> = ({ hasReset }) => {

    const dispatch = useDispatch()

    const songs = useSelector((state: IStore) => {
        return state.songs
    })
    const [hasSong, setHasSong] = useState(songs.length > 0);

    const newSong = () => {
        dispatch(addSong("Coração de Gelo"));
        setHasSong(true)
    }

    const handleRemoveSong: any = (song: string) => {
        dispatch(removeSong(song))
        if (songs.length === 1) setHasSong(false)
    }

    useEffect(() => {
        setHasSong(false)
    }, [hasReset])


    return (
        <div className="d-flex flex-column gap-3 me-5">
            <div className="d-flex  gap-5 justify-content-between">
                <h3 className="text-primary fw-light m-0">SONGS</h3>

                <button className="btn btn-outline-primary" onClick={newSong}>+</button>
            </div>

            <ul className="list-group d-flex flex-column gap-2">
                {
                    songs.map((song, i) => {
                        return <li className="fs-5 d-flex gap-5 text-white d-flex align-items-center" key={i}>
                            {song}
                            <button className="btn btn-default text-danger border-0" onClick={() => handleRemoveSong(song)}>x</button>
                        </li>
                    })
                }
            </ul>
            {
                !hasSong &&
                <p className="text-danger fw-normal">You don't have songs yet</p>
            }
        </div>
    );
}

export default Songs;