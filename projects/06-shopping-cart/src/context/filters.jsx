import { createContext, useState } from 'react'

// 1. Crear el Contexto
export const FiltersContext = createContext()

// 2. Crear el provider, para proveer el contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 250
  })

  return (
    <FiltersContext.Provider value={{

      filters,
      setFilters

    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
