import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Top from './components/Top';
import Tickets from './components/Tickets';
import Merchandise from './components/Merchandise';
import Club from './components/Club';
import Stadium from './components/Stadium';
import Bottom from './components/Bottom';
//https://epic-poitras-685f69.netlify.com
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