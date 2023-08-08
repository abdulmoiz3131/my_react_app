import './App.css';
import React,{useState} from 'react';
import Header from './components/Header.jsx';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [data,setData] = useState([]);

  const addData = () =>{
    if(name == "" || email == ""){
      alert("Fill the Text Fields To Enter Data");
    }
    else{
      setData([...data,{name,email}]);
      setName("");
      setEmail("");
    }

  }
  const removeItem = (index) =>{
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }

  return (
    
    <div className="App">
     <Header/>
     {/* Form  */}
     <div className="mainBox">
     <TextField 
     value={name}
     onChange={(event)=>{setName(event.target.value)}}
     id="outlined-basic" label="name" variant="outlined" />
     <TextField
     value={email}
     onChange={(event)=>{setEmail(event.target.value)}}
     id="outlined-basic" label="email" variant="outlined" />
     <Button id='btn-2'
     onClick={addData}
     variant="contained">
      <AddIcon/>
     </Button>
     </div>

     {/* Render Data  */}

     <div className="rederData">
      <h3>Names</h3>
      <h3>Emails</h3>
      <h3>Remove</h3>
     </div>
     {/* Render Data With Map Function  */}

     {
      data.map((element,index)=>{
        return(
        <div key={index} className="rederData">
        <h3>{element.name}</h3>
        <h3>{element.email}</h3>
        <h3><Button 
        id='btn-1' onClick={()=>{removeItem(index)}}
        
        variant="contained"><DeleteIcon /></Button></h3>
       </div>)
      })
     }
    </div>
  );
}

export default App;
