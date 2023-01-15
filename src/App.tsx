import Movies from "./components/Movies"
import Songs from "./components/Songs"

function App() {

  return (
    <div className="d-flex flex-column align-items-center justify-content-center m-5 p-5">
      <h1>List your's favorite movies and songs</h1>

      <Songs />
      <Movies />
    </div>
  )
}

export default App
