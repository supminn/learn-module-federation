import './App.css'
import reactLogo from './assets/react.svg'
import Header from './components/Header'

function App() {

  return (
    <>
    {/* Header with logo */}
    <Header logo={reactLogo} title='Header Component'/>
    <div className='spacing'/>
    {/* Header without logo */}
    <Header  title='Header Component'/>
    </>
  )
}

export default App
