import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types.d'

function App () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div>

    <h1>Prueba Tecnica</h1>
    {
      JSON.stringify(users)
    }
    </div>

  )
}

export default App
