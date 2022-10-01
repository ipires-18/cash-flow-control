import Routes from './routes'

import { history } from './routes/history'
import { Router } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router history={history}>
      <Routes/>
    </Router>
  )
}

export default App
