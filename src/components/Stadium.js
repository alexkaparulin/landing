import React,{Component} from 'react'
import styled from 'styled-components'

import samiofer from '../images/Sami_Offer.png'
import dot from '../images/dot_PNG28.png'
import bdot from '../images/black-dot-png-1.png'

class Stadium extends Component{
    render(){
        return(
            <Div>
                <Stad src={samiofer}></Stad>
                    <Dots>
                        <Img src ={dot}></Img>
                        <Img src ={dot}></Img>
                        <Img src ={dot}></Img>
                        <Img src ={dot}></Img>
                        <Imgb src={bdot}></Imgb>
                    </Dots>
                <Content>
                    <H1>אצטדיון סמי עופר</H1>
                    <P>אצטדיון סמי עופר הוא אצטדיון כדורגל הממוקם במורדות הדרומיים<br/> של חיפה,</P>
                    <P>בשכונת נאות פרס,בסמוך לפארק מתם,ומכיל 30,870 מקומות ישיבה.</P>
                    <P>האצטדיון,אשר בנייתו הושלמה בשנת,2014 משמש כמגרשן הביתי<br/> של</P>
                    <P>קבוצות מכבי חיפה והפועל חיפה.</P>
                    <P>האצטדיון נקרא על שם איש העסקים סמי עופר,שמימן כ-15% מעלות<br/>הקמתו.</P>
                    <P>האצטדיון נחשב לאצטדיון המודרני ביותר בישראל.</P>
                    <P><Span>חנוכת האצטדיון:</Span></P>
                    <P>מכבי חיפה חנכה את האצטדיון ב-15 בספטמבר 2014 בניצחון 2-4 <br/>במשחק ליגה</P>
                    <P>מול בני סכנין לעיני כ-30,200 צופים.</P>
                    <P>את השער הראשון של מכבי חיפה באצטדיון,שהיה גם שער הליגה הראשון<br/> שהובקע בו,</P>
                    <P>הבקיע חן עזרא בתוספת הזמן של המחצית הראשונה.</P>
                </Content>
            </Div>
        )
    }
}
export default Stadium


const Div = styled.div`
    height:12em; 
    /* display:flex; */
    background:#f4f5fa;
    padding-right:0.3em;
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
const Stad = styled.img`
    position:absolute;
    height:12em;
    width:10.5em;
    @media (min-width: 375px) {
        width:12em;
        }
    @media (min-width: 425px) {
        width:14.5em;
        }
    @media (min-width: 768px) {
        width:27em;
        height:26em;
        }
    @media (min-width: 1024px) {
        height:30em;
        width:36em;
        }
    @media (min-width: 1440px) {
        height:35em;
        width:52em;
        }
    @media (min-width: 2560px) {
        height:60em;
        width:70em;
        }
`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    direction:rtl;
    /* margin-left:7.7em; */
    @media (min-width: 1024px) {
        margin:0 1.5em;
        justify-self:center;
        }
    @media (min-width: 1440px) {
        margin-right:3em;
        }
    @media (min-width: 2560px) {
        margin-right:3.5em;
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
        font-size:2.5em;
        }

`
const P = styled.p`
    font-size:0.36em;
    margin-bottom:-.7em;
    @media (min-width: 768px) {
        font-size:.78em;
        }
    @media (min-width: 1024px) {
        font-size:.9em;
        letter-spacing:.05em;
        }
    @media (min-width: 1440px) {
        font-size:1.15em;
        }
    @media (min-width: 2560px) {
        font-size:2em;
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
`
const Dots = styled.div`
    direction:ltr;
    display:flex;
    position:relative;
    top:11.5em;
    left:-6.2em;
`
const Img = styled.img`
    height:.3em;
    width:.3em;
    margin-left:0.05em;
`
const Imgb = styled.img`
    height:.35em;
    width:.35em;
    margin-left:0.05em;
`