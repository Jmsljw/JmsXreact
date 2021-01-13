import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//* Theme
import { Nav } from './Theme-AIA';

//* Pages
import SampleForm from './components/SampleForm/SampleForm'
import SampleTable from './components/SampleTable/SampleTable'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header - Navigation Bar */}
        <header>
          <Nav />
        </header>

        {/* Content Container */}
        <div className='content'>
          <Switch>
            <Route exact path='/' component={SampleForm} />
            <Route path='/SampleForm' component={SampleForm} />
            <Route path='/SampleTable' component={SampleTable} />
          </Switch>
        </div>

        {/***** End of App *****/}
      </div>
    </Router>
  );
}

export default App;
