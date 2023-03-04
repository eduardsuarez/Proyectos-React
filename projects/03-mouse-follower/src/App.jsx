import { useEffect, useState } from 'react'

function App () {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('efecto', { enable })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup:
    // --> cuando el componente se desmonta
    // --> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />

      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'} Seguir puntero
      </button>
    </main>

  )
}

export default App
