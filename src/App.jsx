import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState("")

  const validDigit = (text) => {
    return text.replace(/[^0-9]/g,"");
  }
  const handleCep = (e) =>{
    const updateValue = validDigit(e.target.value);
    setInput(updateValue);
  }
  const handleSearch = ()=>{
    console.log(input)
  }

  return (
    <div className='container'>
      <h1 className='title'>Buscador de CEP</h1>
      <div className="containerInput">
        <input 
        type="text"
        placeholder='Digite seu CEP'
        onChange={e => handleCep(e)}
        value={input}
        />
        <button className='buttonSearch' onClick={handleSearch}>
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
