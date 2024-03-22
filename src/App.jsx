import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import api from './services/api'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableCep from './components/TableCep'

function App() {
  const [input, setInput] = useState("")
  const [cep, setCep] = useState({})

  const validDigit = (text) => {
    return text.replace(/[^0-9]/g,"");
  }
  const handleCep = (e) =>{
    const updateValue = validDigit(e.target.value);
    setInput(updateValue);
  }
  const handleSearch = async ()=>{
    if(input === "") return;
    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
    }catch{
      alert("Algo de errado no CEP")
      setInput("")
    }
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
      {Object.keys(cep).length > 0  ? <TableCep cep={cep} /> : null}
    </div>
  )
}

export default App
