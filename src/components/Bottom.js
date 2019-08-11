import React,{Component} from 'react'
import styled from 'styled-components'

import background from '../images/background.jpg'

class Bottom extends Component {
  render() {
    return (
    <WrapContainer>
        <Text>
            <H1>מכבי חיפה איתכם גם באימייל</H1>
            <H1Sub>הצטרפו אלינו ותוכלו לקבל עדכונים שוטפים ישירות מהמועדון!</H1Sub>
        </Text>
        <SearchContainer>
            <Search placeholder="כתובת אימייל:"></Search>
            <Button>שלח</Button>
        </SearchContainer>
    </WrapContainer>
    );
  }
}

export default Bottom;

const WrapContainer = styled.div`
    height:3em;
    background:url(${background});
    display:flex;
    align-items:center;
    direction:rtl;
    @media (min-width: 768px) {
        height:4em;
    }
    @media (min-width: 768px) {
        height:4em;
    }
    @media (min-width: 1024px) {
        height:4em;
    }
    @media (min-width: 1440px) {
        height:6em;
    }
    @media (min-width: 1920px) {
       height:7em;
    }
    @media (min-width: 2560px) {
        height:8em;
    }
`
const Text = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media (min-width: 768px) {
        width:45%;
    }
    @media (min-width: 1024px) {
        width:35%;
        padding:0 2em 0 0;
    }
`
const H1 = styled.h1`
    font-size:0.2em;
    font-weight:700;
    color:#f4f5fa;
    margin-bottom:-1.2em;
    direction:rtl;
    @media (min-width: 768px) {
        font-size:.6em;
    }
    @media (min-width: 1024px) {
        font-size:1em;
        margin-bottom:.5em;
    }
    @media (min-width: 2560px) {
        font-size:1.8em;
    }
`
const H1Sub = styled.h1`
    font-size:0.1em;
    color:#f4f5fa;
    direction:rtl;
    @media (min-width: 320px) {
        margin-top:2em;
    }
    @media (min-width: 768px) {
        font-size:.6em;
    }
    @media (min-width: 1024px) {
        font-size:1em;
        margin-top:-.3em;
    }
    @media (min-width: 2560px) {
        font-size:1.8em;
    }
`
const SearchContainer = styled.div`
    display:flex;
    width:40%;
    @media (min-width: 768px) {
        width:55%;
    }
    @media (min-width: 1024px) {
        width:65%;
        justify-content:flex-start;
    }
`
const Search = styled.input`
    border:.1em solid rgb(4, 27, 4);
    border-radius:.8em;
    height:2em;
    font-size:.3em;
    width:20em;
    margin-left:1em;
    padding-right:.7em;
    @media (min-width: 375px) {
        width:28em;   
    }
    @media (min-width: 425px) {
        width:32em;
        height:2em;
    }
    @media (min-width: 768px) {
       width:20em;
       font-size:.7em;
    }
    @media (min-width: 1024px) {
        width:26em;
        font-size:.8em;
    }
    @media (min-width: 1440px) {
        width:28em;
        font-size:1em;
    }
    @media (min-width: 1920px) {
       font-size:1.5em;
       margin-right:3em;
    }
    @media (min-width: 2560px) {
        font-size:1.6em;
        width:38em;
    }
`
const Button = styled.button`
    border-radius:.8em;
    height:2.5em;
    font-size:.3em;
    border:.1em solid rgb(4, 27, 4);
    color:#f4f5fa;
    background:none;
    outline:none;
    @media (min-width: 425px) {
        height:2em;
    }
    @media (min-width: 768px) {
        margin-top:.2em;
        font-size:.7em;       
        width:4em;
    }
    @media (min-width: 1024px) {
        width:5em;
        height:2.4em;
        margin-right:.5em;
        font-size:.8em;
    }
    @media (min-width: 2560px) {
        font-size:1.4em;
    }
`