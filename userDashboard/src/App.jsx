import reactLogo from './assets/react.svg'
import './App.css'
import { PageLoad } from './PageLoad'
function App() {

  return (
    <>
      <div>
       <PageLoad/>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />    
             
        </a>
      </div>
      <h1> React</h1>    
    </>
  )
}

export default App
