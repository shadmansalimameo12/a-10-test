import './App.css'
import { AuthProvider } from './Contexts/AuthContext'
import { Toaster } from 'react-hot-toast'

function App({ children }) {
  return (
    <AuthProvider>
      {children}
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            duration: 3000,
            style: {
              background: 'green',
              color: 'white',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }}
      />
    </AuthProvider>
  )
}

export default App