import React from 'react'
import ReactDOM from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import App from './App'

library.add(faRightToBracket)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);