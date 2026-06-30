import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'servicios', element: <Services /> },
      { path: 'portafolio', element: <Portfolio /> },
      { path: 'contacto', element: <Contact /> }
    ]
  }
])

export default router