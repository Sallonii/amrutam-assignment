import {Switch, Route} from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import FindDoctors from './components/FindDoctors'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/find-doctors" component={FindDoctors} />
    </Switch>
  </>
)

export default App
