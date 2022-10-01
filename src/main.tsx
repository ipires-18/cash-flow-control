import ReactDOM from 'react-dom/client'
import App from './App'
// import './assets/styles/global.module.scss'
import GlobalStyle from './assets/styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle/>
    <App />
  </>
)

postMessage({ payload: 'removeLoading' }, '*') // screen view