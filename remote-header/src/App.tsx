import './App.css'
import reactLogo from './assets/react.svg'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header logo={reactLogo} title='Header Component'/>
    <Header  title='Header Component'/>
    </>
  )
}

export default App
