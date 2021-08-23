import './App.css';
import { useState } from 'react'
import Axios from 'axios'

function App() {

  const [nome, setNome] =useState("")
  const [idade, setIdade] = useState(0)
  const [cpf, setCpf] = useState("")

  const [listarUser, setListarUser] = useState([])
  
  const cadUsuario =()=>{
    Axios.post("http://localhost:3001/cadastros" , {
      nome:nome,
      idade:idade,
      cpf:cpf
    }).then((response)=>{
      console.log('success');
    })
  }

  const listUsuarios = ()=>{
    Axios.get("http://localhost:3001/cadastros")
    .then((response)=>{
      setListarUser(response.data)

    })
  }

  return (
    <div className="App">
      <div className="form">
      <label>Nome</label>
      <input type="text" onChange={(e)=>{
        setNome(e.target.value)
      }}></input>

      <label>Idade</label>
      <input type="number" onChange={(e)=>{
        setIdade(e.target.value)
      }}></input>

      <label>CPF</label>
      <input type="text" onChange={(e)=>{
        setCpf(e.target.value)
      }}></input>

      <button onClick={cadUsuario} >Cadastrar</button>
      </div>
      <div>
        <button onClick={listUsuarios}> Listar </button>
      
        {listarUser.map((val,key)=> { return <div> {val.nome} {val.idade} {val.cpf} </div> })}

      </div>

    </div>
  );
}

export default App;
