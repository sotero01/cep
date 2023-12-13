import {useState} from "react"
import {FiSearch} from "react-icons/fi"
import "./styles.css";

import api from "./services/api";

function App() {
  const[input, setInput] = useState("")
  const[cep, setcep] = useState({})


 async function handleSearch(){
  // 01310930/json/ 

    if(input === ""){
      alert("Digite seu cep!")
      return;
    }
    try{
      const response = await api.get(`${input}/json`)
      await setcep(response.data)
      console.log(response.data, "response")
      setInput("")
    }catch (error){
        alert("CEP não encontrado!")
        setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de cep</h1>

      <div className="containerInput">
       <input type="text"
       placeholder="Digite seu cep..."
       value={input}
       onChange={(e) => setInput(e.target.value)}
       >
        
       </input>
       <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={15} color="#000"/>
       </button>
      </div>
      {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2>{cep.cep}</h2>
            <span>{cep.logradouro}</span>
            <span>{cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
       
        </main>
      )}
    
    </div>
  );
}

export default App;
