import React from 'react';
import { Router, navigate } from '@reach/router'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Sites from './pages/Sites'
import SitesList from './pages/SitesList'
import SitePage from './pages/SitePage'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component {

  state = {
    feature: ""
  }

  render() {
    return (
      <div className="App">
        <Navigation searchBy={this.searchBy} />
        <Router>
          <Home path="/" />
          <Sites path="/sites" />
          <SitesList path="/siteslist/:feature" />
          <SitesList path="/siteslist" />
          <SitePage path="/sites/:id" />
        </Router>
        <Footer />
      </div>
    );
  }


  searchBy = (word) => {
    this.setState({ feature: word })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.feature !== this.state.feature) {
      navigate(`/siteslist/${this.state.feature}`)

    }
  }
}

export default App;
