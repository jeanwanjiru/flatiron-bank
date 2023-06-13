import {useState, useEffect} from 'react'
import './App'
import { ViewTable } from './ViewTable'
 
function App() {
 const [transactions, setTransactions] = useState([])
 useEffect(()=>{
  fetch("http://localhost:8001/transactions")
  .then(response=>response.json())
  .then(data=>setTransactions(data))
},[])
console.log (transactions);
 

  return (
    <>
    {/* <Form/> */}
    <ViewTable transactions = {transactions}/>
    </>

)
  }
export default App;