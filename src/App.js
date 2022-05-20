import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRoure as Router, Route} from 'react-router-dom'

import Navbar from './components/navbar.component'

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
