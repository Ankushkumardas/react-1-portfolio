
import './App.css'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {


  return (
    <>
      <div className='grid grid-cols-1 gap-4 p-3 mx-auto md:grid-cols-3 container-md md:p-7 bg-slate-100 '>
        <div className='col-span-1'>
          <Bio />
        <Skills/>
        </div>
        <div className='col-span-2'>
          <Projects/>
        </div>
        
      </div>
      <div>
          <Contact/>
        </div>
    </>
  )
}

export default App
