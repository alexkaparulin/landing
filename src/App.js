import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Top from './components/Top';
import Tickets from './components/Tickets';
import Merchandise from './components/Merchandise';
import Club from './components/Club';
import Stadium from './components/Stadium';
import Bottom from './components/Bottom';

class App extends Component {
  render() {
    return (
    <Div>
      <Top/>
      <Tickets/>
      <Merchandise/>
      <Club/>
      <Stadium/>
      <Bottom/>
    </Div>
    );
  }
}

export default App;

const Div = styled.div`
`