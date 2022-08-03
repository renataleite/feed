import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author='Renata' content='lorem ipsum 123' />
        </main>
      </div>
    </>
  )
}

export default App
