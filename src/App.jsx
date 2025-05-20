import './App.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'

// Note: The actual routing is handled in main.jsx
function App({ router }) {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App