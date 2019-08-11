import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Top from './components/Top';
import Tickets from './components/Tickets';
import Merchandise from './components/Merchandise';
import Club from './components/Club';
import Stadium from './components/Stadium';
import Bottom from './components/Bottom';
//https://focused-bhabha-90d288.netlify.com/
class App extends Component {
  render() {
    return (
    <Wrapper>
      <Top/>
      <Tickets/>
      <Merchandise/>
      <Club/>
      <Stadium/>
      <Bottom/>
    </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
`