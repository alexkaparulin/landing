import React, { Component } from 'react';
import styled from 'styled-components'

import background from '../images/background.jpg'
import eliran from '../images/eliran atar.png'

class Club extends Component {
  render() {
    return (
    <WrapContainer>
        <PlayerContainer>
            <PlayerImg src={eliran}></PlayerImg>
        </PlayerContainer>
        <ClubContainer>
            <Text>
                <H1>מועדון הכדורגל מכבי חיפה</H1>
                <P>מכבי חיפה הוא מועדון כדורגל ישראל מהעיר חיפה,המשחק בליגת העל הישראלית.</P>
                <P>המועדון הוקם בשנת 1913,ומאז 1992 הוא מנוהל על ידי איש העסקים יעקב שחר,</P>
                <P>שמכהן כנשיא המועדון.המועדון כולל גם קבוצות נוער,נערים וילדים,ובתי ספר לכדורגל.</P>
            
                <P>צבע התלבושת הביתית של  המועדון הוא ירוק,ולאורך השנים שולב גם הצבע לבן.</P>
                <P>עד שנת 1955 ערכה הקבוצה את מרבית משחקי הבית שלה באיצטדיון קריית חיים,</P>
                <P>ומשנת 1955 עד שנת 2014 שיחקה הקבוצה באצטדיון סמי עופר.</P>
                <P>החל מעונת 2014/2015 משחקת הקבוצה באיצדיון סמי עופר.</P>

                <P><Span>תארים:</Span></P>
                <P>ברוב התארים זכה המועדון החל משנות השמונים של המאה ה-20,שהפכו אותו לאחד</P>
                <P>מהמובילים בכדורגל הישראלי.המועדון זכה לאורך שנותיו ב-12 אליפויות ישראל,</P>
                <P>בשישה גביעי מדינה,בארבעה גביעי טוטו ובשלושה גביעי אלוף האלופים.</P>
                <P>כמו כן,הוא הגיע להישגים רבים במפעלים האירופיים: הוא מועדון הישראלי הראשון בתולדות</P>
                <P>הכדורגל הישראלי שהעפיל לשלב הבתים של ליגת האלופות בעונת (2002/2003)</P>
                <P>והראשון שהעפיל הפעם השנייה לשלב זה של המפעל בעונת (2009/2010)</P>
                <P>בנוסף, הוא המועדון היחיד שהעפיל לרבע גמר גביע אירופה למחזיקות גביע בעונת (1998/1999).</P>
                <H3>קרא עוד...</H3>
            </Text>
        </ClubContainer>
    </WrapContainer>
    )
  }
}

export default Club;

const WrapContainer = styled.div`
    background:url(${background});
    height:14em;
    display:flex;
    direction:rtl;
    @media (min-width: 768px) {
        height:26em;
    }
    @media (min-width: 1024px) {
        height:36em;
    }
`
const PlayerContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:flex-start;
    width:40%;
    @media (min-width: 1024px) {
        justify-content:flex-start;
        width:30%;
    }
`
const PlayerImg = styled.img`
    position:relative;
    top:-2em;
    height:16em;
    width:8em;
    @media (min-width: 375px) {
        width:10em;
    }
    @media (min-width: 768px) {
        top:-4em;
        height:30em;
        width:18em;
    }
    @media (min-width: 1024px) {
        height:40em;
        width:100%;
        top:-4em;
        right:0em;
    }
`
const ClubContainer = styled.div`
    color:#f4f5fa;
    display:flex;
    width:60%;
    direction:rtl;
    align-items:center;
    @media (min-width: 1024px) {
        font-size:1.2em;
        width:70%;
    }
`
const Text = styled.div``
const P = styled.p`
    font-size:5px;
    @media (min-width: 768px) {
        font-size:9px;
    }
    @media (min-width: 1024px) {
        letter-spacing:0.05em;
        font-size:14px;
    }    
`
const Span = styled.strong`
    font-size:0.2em;
    @media(min-width:1024px){
        font-size:1.1em;
    }
`
const H1 = styled.h1`
    margin-bottom:-.2em;
    font-size:0.2em;
    font-weight:600;
    @media (min-width: 768px) {
        font-size:1.2em;
        margin-bottom:.5em;
    }
    @media(min-width:1024px){
        margin-bottom:.7em;
    }    
`
const H3 = styled.h3`
    font-weight:600;
    background:#fff;
    border-radius:.9em;
    text-align:flex-end;
    padding-right:.7em;
    align-self:center;
    justify-self:center;
    height:1.5em;
    width:5em;
    color:#007738;
    border:none;
    outline:none;
    font-size:.1em;
    &:hover{
    transform: scale(1.05); 
    }
    @media (min-width: 1024px) {
        font-size:.5em;
    }
`