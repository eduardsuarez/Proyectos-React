import { lazy, Suspense } from 'react'
import './App.css'

import Page404 from './pages/404'
import SearchPage from './pages/Search'

import { Router } from './Router'
import { Route } from './Route'

const LazyHomePage = lazy(() => import('./pages/Home'))
const lazyAboutPage = lazy(() => import('./pages/About'))

const routes = [
  {
    path: '/:lang/about',
    Component: lazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={lazyAboutPage} />
        </Router>

      </Suspense>

    </main>

  )
}

export default App
