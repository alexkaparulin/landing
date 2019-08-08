import React, { Component } from 'react';
import styled from 'styled-components'

import shirt from '../images/short_hifa.png' 
import dot from '../images/black-dot-png-1.png'
import gdot from '../images/Location_dot_green.svg.png'


class Merchandise extends Component {
  render() {
    return (
    <WrapContainer>
        <StoreTextContainer>
            <H1>חנות המוצרים הרשמית!</H1>
            <P>כנסו עכשיו לחנות המוצרים הרשמית של מכבי חיפה</P>
            <P>ותוכלו להנות ממגוון מוצרים ומבצעים הכי חמים!</P>
            <P>באתר החנות תוכלו למצוא מגוון מוצרים- ציוד ספורט,תיקים,</P>
            <P>מוצרים לרכב ,ביגוד והנעלה,מוצרים לילדים,מוצרי עידוד ועוד.</P>
            <P>כל המוצרים הינם רשמיים ובלעדיים למועדון הכדורגל מכבי חיפה</P>
            <P>שנבחרו בקפידה.</P>
            <Button>לרכישת מוצרים</Button>
        </StoreTextContainer>
        <ShirtContainer>
            <DotsContainer>
                <Dot src={dot}></Dot>
                <Dot src={dot}></Dot>
                <Dot src={dot}></Dot>
                <Dot src={dot}></Dot>
                <GDot src={gdot}></GDot>
            </DotsContainer>
                <ShirtImg src={shirt}></ShirtImg>
        </ShirtContainer>
    </WrapContainer>
    );
  }
}

export default Merchandise;

const WrapContainer = styled.div`
    height:12em;
    background:#f4f5fa;
    display:flex;
    direction:rtl;
    justify-content:center;
    @media (min-width: 768px) {
        height:26em;
    }
    @media (min-width: 1024px) {
        height:30em;
        letter-spacing:0.05em;
    }
    @media (min-width: 1440px) {
        height:35em;
    }
    @media (min-width: 1920px) {
       height:55em;
    }
    @media (min-width: 2560px) {
        height:60em;
    }
`
const StoreTextContainer = styled.div`
    direction:rtl;
    display:flex;
    flex-direction:column;
    align-self:center;
    margin-top:.7em;
    color:#231f20;
    @media (min-width: 320px) {
        font-size:1em;
        margin-right:.4em;
    }
    @media (min-width: 425px) {
        font-size:1.1em;
    }
    @media (min-width: 1024px) {
        font-size:1.3em;
        margin:0em 2em;
    }
    @media (min-width: 1440px) {
        font-size:1.6em;
    }
    @media (min-width: 1920px) {
       font-size:2.2em;
    }
    @media (min-width: 2560px) {
        font-size:2.5em;
        margin-right:2em;
    }
`
const H1 = styled.h1`
    font-size:.45em;
    margin-bottom:1.8em;
    @media (min-width: 768px) {
        font-size:1.2em;
    }
    @media (min-width: 1920px) {
       font-size:1.3em;
    }
    @media (min-width: 2560px) {
       font-size:1.4em;
    }
`
const P = styled.p`
    font-size:.32em;
    margin-top:-.4em;
    @media (min-width: 768px) {
        font-size:.75em;
    }
    @media (min-width: 1920px) {
       font-size:.8em;
    }
`
const Button = styled.button`
    background:#007738;
    color:#f4f5fa;
    border:none;
    width:8em;
    font-size:.4em;
    font-weight:500;
    border-radius:.7em;
    margin-top:1em;
    outline:none;
    &:hover{
    transform: scale(1.05); 
    }
    @media (min-width: 768px) {
        width:10em;
        font-size:.8em;
    }
    @media (min-width: 2560px) {
       font-size:1em;
    }
`
const DotsContainer = styled.div`
    position:relative;
    top:1.4em;
    left:4em;
    direction:ltr;
    @media (min-width: 320px) {
        left:4.35em;
    }
    @media (min-width: 425px) {
        left:4.3em;
    }
    @media (min-width: 768px) {
        top:3.5em;
        left:9em;
    }
    @media (min-width: 1024px) {
        left:14em;
        top:2em;
    }
    @media (min-width: 1440px) {
        left:15.5em;
    }
    @media (min-width: 1920px) {
       left:21.5em;
       top:7em;
    }
    @media (min-width: 2560px) {
        left:28em;
        top:4.5em;
    }
`
const Dot = styled.img`
    height:.3em;
    width:.3em;
    margin-left:.05em;
    @media (min-width: 768px) {
        height:.8em;
        width:.8em;
    }
    @media (min-width: 1024px) {
        height:.9em;
        width:.9em;
    }
    @media (min-width: 1440px) {
        height:1.3em;
        width:1.3em;
    }
    @media (min-width: 1920px) {
       height:1.6em;
       width:1.6em;
    }
    @media (min-width: 2560px) {
        height:2em;
        width:2em;
    }
`
const GDot = styled.img`
    height:.305em;
    width:.305em;
    margin-left:.05em;
    @media (min-width: 768px) {
        height:.8em;
        width:.8em;
    }
    @media (min-width: 1024px) {
        height:.9em;
        width:.9em;
    }
    @media (min-width: 1440px) {
        height:1.3em;
        width:1.3em;
    }
    @media (min-width: 1920px) {
        height:1.6em;
        width:1.6em;
    }
    @media (min-width: 2560px) {
        height:2em;
        width:2em;
    }
` 
const ShirtImg = styled.img`
    margin-top:1.65em;
    height:9em;
    width:9.5em;
    @media (min-width: 320px) {
        width:10em;
        margin-top:1.62em;
    }
    @media (min-width: 425px) {
        height:9em;
        width:10em;
    }
    @media (min-width: 768px) {
        height:20em;
        width:22em;
        margin-top:4.65em;
    }
    @media (min-width: 1024px) {
        height:26em;
        width:32em;
        margin-top:2.65em;
    }
    @media (min-width: 1440px) {
        height:31em;
        width:37em;
    }
    @media (min-width: 1920px) {
       height:44.7em;
       width:50em;
       margin-top:8.4em;
    }
    @media (min-width: 2560px) {
        height:50em;
        width:65em;
        margin-top:8em;
    }
`
const ShirtContainer = styled.div`
    @media (min-width: 1024px) {
        margin-right:2.5em;
    }
`
