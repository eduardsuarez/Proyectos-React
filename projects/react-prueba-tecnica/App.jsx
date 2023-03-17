import { useEffect, useState } from 'react'
import './App.css'
import { useCatImage } from './public/hooks/useCatImage'
import { useCatFact } from './public/hooks/useCatFact'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstword}`

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img
        src={imageUrl} alt={`Image extracted using th first
             three words for ${fact}`}
                   />}
    </main>

  )
}
