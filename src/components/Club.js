import React, { Component } from 'react';
import styled from 'styled-components'

import background from '../images/background.jpg'
import eliran from '../images/eliran atar.png'

class Club extends Component {
  render() {
    return (
    <Div>
     <Player src={eliran}></Player>
     <Content>
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
     </Content>
    </Div>
    )
  }
}

export default Club;

const Div = styled.div`
    background:url(${background});
    height:12em;
    display:flex;
    direction:rtl;
    @media (min-width: 768px) {
        height:26em;
        }
    @media (min-width: 1024px) {
        height:30em;
        }
    @media (min-width: 1440px) {
        height:35em;
        }
    @media (min-width: 2560px) {
        height:60em;
        }
`
const Player = styled.img`
    position:relative;
    top:-2em;
    height:14em;
    width:10em;
    @media (min-width: 320px) {

        }
    @media (min-width: 768px) {
        height:28em;
        width:18em;
        }
    @media (min-width: 1024px) {
        height:33em;
        width:22em;
        top:-3em;
        right:3em;
        margin-left:3em;
        }
    @media (min-width: 1440px) {
        height:38em;
        width:26em;
        }
    @media (min-width: 2560px) {
        height:65em;
        width:43em;
        top:-5em;
        }
`
const Content = styled.div`
    /* margin-right:-.5em; */
    color:#f4f5fa;
    @media (min-width: 375px) {
        font-size:1.03em;
        /* margin-right:.5em; */
}
    @media (min-width: 1024px) {
        font-size:1.2em;
        /* margin-right:2em; */
}
    @media (min-width: 1440px) {
        /* margin-right:4em; */
        font-size:1.4em;
}
    @media (min-width: 2560px) {
        font-size:2.2em;
        }
`
const P = styled.p`
    font-size:0.27em;
    @media (min-width: 768px) {
        font-size:.55em;
        }
    @media (min-width: 1024px) {
        letter-spacing:0.05em;
        }    
    @media(min-width:2560px){
        font-size:.59em;
    }
`
const Span = styled.strong`
    font-size:0.4em;
    @media(min-width:1024px){
        font-size:1.1em;
    }
`
const H1 = styled.h1`
    margin-bottom:-.2em;
    font-size:0.5em;
    font-weight:600;
    @media (min-width: 768px) {
        font-size:1.2em;
        }
    @media(min-width:1024px){
        margin-bottom:.7em;
    }    
    @media (min-width: 2560px) {
       font-size:1.8em;
       margin-bottom:0.4em;
        }
`
const H3 = styled.h3`
    /* font-size:0.4em; */
    /* margin-bottom:-.2em; */
    font-weight:600;
    /* border-radius:100%; */
    background:#fff;
    border-radius:.9em;
    text-align:flex-end;
    padding-right:.7em;
    align-self:center;
    justify-self:center;
    height:1.2em;
    width:5em;
    color:#007738;
    border:none;
    outline:none;
    &:hover{
    transform: scale(1.05); 
    }
    @media (min-width: 320px) {
        font-size:.1em;
        margin-top:1.7em;
        }
    @media (min-width: 768px) {
        font-size:.6em;
        }
    @media (min-width: 1024px) {
        font-size:.62em;
        }
    @media (min-width: 1440px) {
        font-size:.7em;
        margin-top:-.2em;
        padding-right:.4em;
        margin-top:.75em;
        height:1.5em;
        }
    @media (min-width: 2560px) {
        font-size:.7em;
        }
`