import React, { Component } from 'react';
import styled from 'styled-components';

import tri from '../images/tri.png'
import left from '../images/next_left.png'
import right from '../images/next_right.png'
import Hapoel from '../images/Hapoelta logo Small.png'
import Haifa from '../images/Maccabi-Hifa logo Small.png'
import haifaPlayers from '../images/Players.png'

class Tickets extends Component {
  render() {
    return (
    <WrapContainer>
        <BlineWrap>
            <Triangle src={tri}></Triangle>
        </BlineWrap>
        <Header>
            <Arrows>
                <DateContainer>
                    <DateText>יום שני 06/03/2017  ,21:00 <br/>
                    ליגת העל , איצטדיון סמי עופר</DateText>
                </DateContainer>
                <TeamsOpponentCon>
                    <Left src={left}></Left>
                    <HapoelLogo src={Hapoel}></HapoelLogo>
                    <H1>הפועל תל אביב</H1>
                    <Vs>VS</Vs>
                    <H1>מכבי חיפה</H1>
                    <HaifaLogo src={Haifa}></HaifaLogo>
                    <Right src={right}></Right>
                </TeamsOpponentCon>
                <BuyContainer>
                    <Buy>רכישת כרטיס</Buy>
                </BuyContainer>
            </Arrows>
        </Header>
        <Content>
            <PlayersCon>
                <Players src={haifaPlayers}></Players>
            </PlayersCon>
            <Text>
                <TextTitle>מכירת מנויים וכרטיסים - עונת 2016/2017</TextTitle>
                <H5>רכישת מנויים:</H5>
                <P>רכישת מנויים נמשכת!</P>
                <P>מנוי ליציע הכסף,גוש 301 ב-700 ש"ח בלבד</P>
                <P>מנויים ליציע הדרומי והצפוני במחיר 500 ש"ח</P>
                <H5>רכישת כרטיסים:</H5>
                <P>* לרכישה קבוצתית של כרטיסים לטובת ימי גיבוש,ימי כיף,</P>
                <P>ימי הולדת ואירועים אחרים, יש לשלוח מייל</P>
                <P> לכתובת: <Span>Tickets4@MaccabiHaifaFC.com</Span></P>
                <PSpan>* להזכירם,בהזמנת כרטיסים בהדפסה ביתית דרך אתר האינטרנט</PSpan>
                <P>או האפליקציה לא נגבים דמי טיפול</P>
                <BottomSpan>מחיר מנוי לכסף פרימיום -מחיר מלא: 3,000 ש"ח</BottomSpan>
                <BottomSpanH5>ועכשיו מחיר מיוחד -2,000 ש"ח בלבד.</BottomSpanH5>
                <BottomSpanH5>נותרו מקומות אחרונים.</BottomSpanH5>
            </Text>
        </Content>
    </WrapContainer>
    );
  }
}

export default Tickets;

const WrapContainer = styled.div`
    height:12em;
    display:flex;
    flex-direction:column;
    @media (min-width: 768px) {
        height:26em;
    }
    @media (min-width: 1024px) {
        height:40em;
    }
    @media (min-width: 1440px) {
        height:40em;
    }
`
const BlineWrap = styled.div`
    height:.2em;
    width:100%;
    background:black;
    display:flex;
    justify-content:center;
    @media (min-width: 768px) {
        height:.4em;
    }
    @media (min-width: 1024px) {
        height:.5em;
    }
`
const Triangle = styled.img`
    position:relative;
    height:.6em;
    width:.6em;
    justify-self:center;
    margin-left:2em;
    @media (min-width: 320px) {
        margin-right:1em;
    }
    @media (min-width: 768px) {
        height:1em;
        width:1em;
    }
    @media (min-width: 1024px) {
        height:1.4em;
        width:1.4em;
        margin-left:3em;
    }
`
const Header = styled.div`
    background:#f4f5fa;
    padding-top:.8em;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:3em;
    @media (min-width: 768px) {
        height:5em;
    }
    @media (min-width: 1024px) {
        height:8em;
    }
`
const Arrows = styled.div`
    display:flex;
    flex-direction:column;
    align-items:space-evenly;
    justify-content:center;
    width:65%;
    @media (min-width: 1024px) {
        height:inherit;
    }
`
const DateContainer= styled.div`
    display:flex;
    justify-content:center;
    margin-top:-.5em;
    @media (min-width: 320px) {
        margin-bottom:.2em;
    }
    @media (min-width: 1024px) {
        margin-top:1em;
    }
`
const DateText = styled.p`
    color:#231f20;
    direction:rtl;
    font-size:.01em;
    @media (min-width: 320px) {
        font-size:4px;
    }
    @media (min-width: 768px) {
        font-size:.5em;
    }
    @media (min-width: 1024px) {
        font-size:.8em;
        margin-top:-1em;
    }
 `  
const TeamsOpponentCon = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin-top:-1.2em;
    @media (min-width: 375px) {
        margin-top:-.8em;
    }
    @media (min-width: 1024px) {
        margin-top:-1em;
    }
`
const Left = styled.img`
    height:.8em;
    width:.8em;
    @media (min-width: 768px) {
        height:1.6em;
        width:1.6em;
    }
    @media (min-width: 1024px) {
        height:2.2em;
        width:2.2em;
    }
`
const HapoelLogo = styled.img`
    height:1.2em;
    width:1.2em;
    margin:0 .6em;
    @media (min-width: 768px) {
       height:2.5em;
       width:2.4em;
    }
    @media (min-width: 1024px) {
        height:4em;
        width:3.5em;
    }
`
const H1 = styled.p`
    font-size:.4em;
    font-weight:500;
    @media (min-width: 425px) {
        font-size:.4em;
    }
    @media (min-width: 768px) {
        font-size:1em;
    }
    @media (min-width: 1024px) {
        font-size:.9em;
        margin-bottom:0.8em;
    }
    @media (min-width: 1440px) {
        font-size:1.4em;
    }
    @media (min-width: 1920px) {
        font-size:2em;
        font-weight:500;
    }
    @media (min-width: 2560px) {
        font-size:2.5em;
    }
`
const Vs = styled.p`
    font-weight:800;
    font-size:.7em;
    @media (min-width: 375px) {
        margin:0 2em;
    }
    @media (min-width: 768px) {
        font-size:1em;
    }
    @media (min-width: 1024px) {
        font-size:1.4em;
    }
`
const HaifaLogo = styled(HapoelLogo)`    
    @media (min-width: 1024px) {
    height:4.6em;
    width:4.3em;
    }
`
const Right = styled(Left)``
const BuyContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:-1em;
    @media (min-width: 375px) {
        margin-top:-.4em;
    }
    @media (min-width: 768px) {
        margin-top:-1em;
    }
    @media (min-width: 1024px) {
        margin-top:-.8em;
    }
`
const Buy = styled.button`
    color:white;
    background:green;
    border-radius:.8em;
    outline:none;
    border:none;
    font-size:.01em;
    margin-top:1em;
    margin-left:2em;
    padding:.02em .1em;
    &:hover{
    transform: scale(1.05); 
    }
    @media (min-width: 768px) {
        font-size:.6em;
        padding:.02em .5em;
    }
    @media (min-width: 1024px) {
        font-size:.7em;
        padding:.2em 1em;
    }
`
const Content = styled.div`
    direction:rtl;
    display:flex;
    height:100%;
    align-items:flex-end;
`
const PlayersCon = styled.div`
    display:flex;
    justify-content:center;
    width:50%;
`
const Players = styled.img`
    height:100%;
    width:100%;
    @media (min-width: 320px) {
        height:8em;
        margin-top:.45em;
    }
    @media (min-width: 425px) {
        width:12em;
    }
    @media (min-width: 768px) {
        height:18em;
        width:22em;
        margin-top:2em;
    }
    @media (min-width: 1024px) {
        height:28em;
        width:85%;
    }
`
const Text = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:50%;
    height:100%;
    @media (min-width: 320px) {
        margin-top:.2em;
    }
    @media (min-width: 1024px) {
        letter-spacing:.05em;
    }
    @media (min-width: 1920px) {
        margin-top:-2em;
    }
`
const TextTitle = styled.p`
    font-size:.4em;
    font-weight:500;
    @media (min-width: 425px) {
        font-size:.4em;
    }
    @media (min-width: 768px) {
        font-size:1em;
    }
    @media (min-width: 1024px) {
        font-size:1.5em;
        font-weight:700;
        margin-bottom:1.4em;
    }
`
const H5 = styled.h5`
    margin-top:-.65em;
    margin-bottom:.8em;
    font-size:.38em;
    color:#007738;
    @media (min-width: 425px) {
        font-size:.35em;
    }
    @media (min-width: 768px) {
        font-size:.65em;
        margin-bottom:1em;
    }
    @media (min-width: 1024px) {
        font-size:1.1em;
        margin-bottom:1.2em;
    }
`
const P = styled.p`
    margin-top:-1em;
    color:#231f20;
    direction:rtl;
    font-size:.35em;
    @media (min-width: 768px) {
        font-size:.8em;
    }
    @media (min-width: 1024px) {
        font-size:1.1em;
        margin-top:-1em;
    }
`
const Span= styled.span`
    font-weight:600;
    @media (min-width: 320px) {
        font-size:.35em;
    }
    @media (min-width: 768px) {
        font-size:.8em;
    }
    @media (min-width: 1920px) {
        font-size:1em;
    }
        
`
const PSpan = styled(P)`
    margin-top:.2em;
    @media (min-width: 320px) {
        font-size:.35em;
    }
    @media (min-width: 768px) {
        font-size:.65em;
    }
    @media (min-width: 1024px) {
        font-size:1em;
    }
`
const BottomSpanH5 = styled(H5)`
    margin-bottom:.5em;
    @media (min-width: 320px) {
        font-size:.35em;
    }
    @media (min-width: 768px) {
        font-size:.55em;
    }
    @media (min-width: 1024px) {
        font-size:.9em;
    }
`
const BottomSpan = styled(BottomSpanH5)`
    margin-top:.4em;
    @media (min-width: 768px) {
        font-size:.55em;
    }
    @media (min-width: 1024px) {
        font-size:.9em;
    }
`
