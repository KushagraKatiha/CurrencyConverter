import React from 'react'
import './App.css'
import Converter from './component/Converter.jsx'

function App() {
  

async  function fetchData(){
  
   await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_5WqQ15g7X21td6u365lydj18AyjqvkBmu8exqDaK")
    .then((res)=>res.json())
    .then((res)=> localStorage.setItem('data', JSON.stringify(res))
      )
    .catch((err)=>{
      console.log(err.message);
    })

}

fetchData()

  let obj = JSON.parse(localStorage.getItem('data'))

  let countries = []

  for( let key in obj.data){
    countries.push(key)
  }

  return (
    <>
    <div className='wrapper'>
        <Converter heading={"Currency Converter"} list_one={countries} list_two={countries} />
     </div>
    </>
  )
}

export default App
