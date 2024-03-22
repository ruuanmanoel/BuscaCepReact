import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1 className='title'>Buscador de CEP</h1>
      <div className="containerInput">
        <input 
        type="text"
        placeholder='Digite seu CEP'
        />
        <button className='buttonSearch'>
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>
      <main className='main'>
        <h2>CEP: 79003222</h2>

        <span>Rua Teste algum</span>
        <span>Complemento: Algum complemento</span>
        <span>Bairro: Vila rosa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  )
}

export default App
