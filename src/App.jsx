import './App.css'
import {Header,Start,About,Contact,Exp} from './components/index'
function App() {

  return (
    <>
      <Header/>
      <div className='absolute w-full h-fit'>
        <Start/>
        <About/>
        <Exp/>
        <Contact/>
      </div>
    </>
  )
}

export default App
