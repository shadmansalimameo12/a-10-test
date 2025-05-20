import './App.css'
import { AuthProvider } from './Contexts/AuthContext'
import { Toaster } from 'react-hot-toast'

function App({ children }) {
  return (
    <AuthProvider>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  )
}

export default App