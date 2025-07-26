import './App.css'
import { useEffect } from 'react'
import { Header, Start, About, Contact, Exp } from './components/index'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950 min-h-screen">
      <Toaster 
        richColors 
        closeButton 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(16, 20, 32, 0.9)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            color: 'white'
          }
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <Header />
      <main className='w-full relative z-10 cursor-default'>
        <Start />
        <Exp />
        <About />
        <Contact />
      </main>

    </div>
  )
}

export default App
