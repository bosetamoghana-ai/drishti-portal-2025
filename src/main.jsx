import React from 'react'
import ReactDOM from 'react-dom/client'
// Using the '@' alias is a robust way to import
import App from '@/App.jsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
