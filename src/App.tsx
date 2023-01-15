import { useDispatch } from "react-redux"
import Movies from "./components/Movies"
import Songs from "./components/Songs"
import { useState } from "react"
import { reset } from "./store";
import './index.css'

function App() {

  const dispatch = useDispatch();

  const [hasReset, setHasReset] = useState(false);

  const resetBoth = () => {
    dispatch(reset());

    if(hasReset) setHasReset(false);
    else setHasReset(true);
    
  }

  return (
    <div className="test d-flex flex-column align-items-center justify-content-center m-5 p-5">
      <h1 className="text-white display-5">List your's favorite movies and songs</h1>

      <button className="btn btn-danger mt-5" onClick={resetBoth}>RESET BOTH</button>

      <div className="d-flex mt-5 gap-5">
        <Songs hasReset={hasReset}/>
        <Movies hasReset={hasReset}/>
      </div>
    </div>
  )
}

export default App
