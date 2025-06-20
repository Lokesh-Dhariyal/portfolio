import './App.css'
import { useEffect } from 'react'
import { Header, Start, About, Contact, Exp } from './components/index'
import { Toaster } from 'sonner'

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Toaster richColors closeButton />
      <Header />
      <div className='w-full'>
        <Start />
        <About />
        <Exp />
        <Contact />
      </div>
    </>
  )
}

export default App
