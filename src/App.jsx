import { Header } from "./components/Header"
import { Post } from "./Post"
import './global.css'

function App() {

  return (
    <>
      <h1>
        Hello World
      </h1>
      <Header />
      <Post author='Renata' content='lorem ipsum 123' />
    </>
  )
}

export default App
