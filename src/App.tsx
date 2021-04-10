import React from 'react';
import Header from './components/Home/Header'
import Hero from './components/Home/Hero'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Hero/>
      </div> 
    )
  }
}

export default App;
