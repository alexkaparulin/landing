import React,{Component} from 'react'
import styled from 'styled-components'

import samiofer from '../images/Sami_Offer.png'
import dot from '../images/dot_PNG28.png'
import bdot from '../images/black-dot-png-1.png'

class Stadium extends Component{
    render(){
        return(
        <WrapContainer>
            <StadiumContainer>
                <StadiumImg src={samiofer}></StadiumImg>
                    <DotsContainer>
                        <Dot src ={dot}></Dot>
                        <Dot src ={dot}></Dot>
                        <Dot src ={dot}></Dot>
                        <Dot src ={dot}></Dot>
                        <Dotb src={bdot}></Dotb>
                    </DotsContainer>
            </StadiumContainer>
            <StadiumTextContainer>
                <H1>אצטדיון סמי עופר</H1>
                <P>אצטדיון סמי עופר הוא אצטדיון כדורגל הממוקם במורדות הדרומיים של חיפה,</P>
                <P>בשכונת נאות פרס,בסמוך לפארק מתם,ומכיל 30,870 מקומות ישיבה.</P>
                <P>האצטדיון,אשר בנייתו הושלמה בשנת,2014 משמש כמגרשן הביתי של</P>
                <P>קבוצות מכבי חיפה והפועל חיפה.</P>
                <P>האצטדיון נקרא על שם איש העסקים סמי עופר,שמימן כ-15% מעלותהקמתו.</P>
                <P>האצטדיון נחשב לאצטדיון המודרני ביותר בישראל.</P>
                <P><Span>חנוכת האצטדיון:</Span></P>
                <P>מכבי חיפה חנכה את האצטדיון ב-15 בספטמבר 2014 בניצחון 2-4 במשחק ליגה</P>
                <P>מול בני סכנין לעיני כ-30,200 צופים.</P>
                <P>את השער הראשון של מכבי חיפה באצטדיון,שהיה גם שער הליגה הראשון שהובקע בו,</P>
                <P>הבקיע חן עזרא בתוספת הזמן של המחצית הראשונה.</P>
            </StadiumTextContainer>
        </WrapContainer>
        )
    }
}
export default Stadium


const WrapContainer = styled.div`
    display:flex;
    height:12em; 
    background:#f4f5fa;
    padding-right:0.3em;
    @media (min-width: 768px) {
        height:26em;
    }
    @media (min-width: 1024px) {
        height:36em;
    }
    @media (min-width: 1440px) {
        height:40em;
    }
    @media (min-width: 1920px) {
       height:55em;
    }
    @media (min-width: 2560px) {
        height:60em;
    }
`
const StadiumContainer = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:48%;
    @media (min-width: 768px) {
        width:52%;
    }
    @media (min-width: 1024px) {
        width:60%;
    }
    @media (min-width: 2560px) {
        height:63em;
        overflow:hidden;
    }
`
const StadiumImg = styled.img`
    height:12em;
    width:100%;
    @media (min-width: 768px) {
        height:100%;
    }
    @media (min-width: 1024px) {
        height:100%;
        width:100%;
    }
`
const DotsContainer = styled.div`
    direction:ltr;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    bottom:.5em;
    @media (min-width: 768px) {
        bottom:1.2em;
    }
    @media (min-width: 1024px) {
        bottom:1.8em;
        width:75%;
        left:0em;
    }
    @media (min-width: 2560px) {
        left:3em;
        bottom:3.5em;
    }
`
const Dot = styled.img`
    height:.3em;
    width:.3em;
    margin-left:0.05em;
    @media (min-width: 768px) {
        margin-left:.2em;
        height:.9em;
        width:.9em;
    }
    @media (min-width: 1024px) {
        margin-left:.2em;
        height:1.2em;
        width:1.2em;
    }
    @media (min-width: 2560px) {
        height:2.5em;
        width:2.5em;
    }
`
const Dotb = styled.img`
    height:.35em;
    width:.35em;
    margin-left:0.05em;
    @media (min-width: 768px) {
        margin-left:.2em;
        height:1.15em;
        width:1.05em;
    }
    @media (min-width: 1024px) {
        margin-left:.2em;
        height:1.45em;
        width:1.4em;
    }
    @media (min-width: 2560px) {
        height:3em;
        width:3em;
    }
`
const StadiumTextContainer = styled.div`
    display:flex;
    flex-direction:column;
    direction:rtl;
    align-items:flex-start;
    justify-content:center;
    width:52%;
    @media (min-width: 768px) {
        width:48%;
    }
    @media (min-width: 1024px) {
        width:50%;
        padding:0 3em;
        overflow:hidden;
    }
`
const H1 = styled.h1`
    font-size:0.45em;
    color:#007738;
    margin-bottom:-.2em;
    @media (min-width: 768px) {
        font-size:1.4em;
    }
    @media (min-width: 1024px) {
        font-size:1.6em;
        margin-bottom:-.2em;
    }
    @media (min-width: 1024px) {
        font-size:1.8em;
    }
    @media (min-width: 2560px) {
        font-size:3em;
    }
`
const P = styled.p`
    font-size:0.2em;
    margin-bottom:-.7em;
    @media (min-width: 768px) {
        font-size:.8em;
    }
    @media (min-width: 1024px) {
        font-size:1.2em;
    }
    @media (min-width: 2560px) {
        font-size:2.3em;
    }
`
const Span = styled.span`
    font-weight:700;
    font-size:.9em;
    color:#007738;
    @media(min-width:768px){
        font-size:0.9em;
    }
    @media (min-width: 2560px) {
        font-size:.8em;
    }
    @media (min-width: 2560px) {
        font-size:1em;
    }
`