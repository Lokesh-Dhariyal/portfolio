import './App.css'
import {Header,Start,About,Contact,Exp} from './components/index'
import { Toaster } from 'sonner'
function App() {

  return (
    <>
      <Toaster richColors closeButton/>
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
