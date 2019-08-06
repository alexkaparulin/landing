import React,{Component} from 'react'
import styled from 'styled-components'

import samiofer from '../images/Sami_Offer.png'
import dot from '../images/dot_PNG28.png'
import bdot from '../images/black-dot-png-1.png'

class Stadium extends Component{
    render(){
        return(
            <Div>
                <StadiumCon>
                    <Stad src={samiofer}></Stad>
                    <Dots>
                        <Img src ={dot}></Img>
                        <Img src ={dot}></Img>
                        <Img src ={dot}></Img>
                        <Img src ={dot}></Img>
                        <Imgb src={bdot}></Imgb>
                    </Dots>
                </StadiumCon>
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
    display:flex;
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
    @media (min-width: 1920px) {
       height:55em;
        }
    @media (min-width: 2560px) {
        height:60em;
        }
`
const StadiumCon = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:55%;
    @media (min-width: 1024px) {
        border:1px solid red;
    }
`
const Stad = styled.img`
    /* position:absolute; */
    height:12em;
    width:11em;
    @media (min-width: 375px) {
        /* width:12em; */
        }
    @media (min-width: 425px) {
        /* width:14.5em; */
        }
    @media (min-width: 768px) {
        /* width:27em; */
        /* height:26em; */
        }
    @media (min-width: 1024px) {
        height:100%;
        width:85%;
        }
    @media (min-width: 1440px) {
        /* height:35em; */
        /* width:52em; */
        }
    @media (min-width: 1920px) {
       /* height:55em; */
       /* width:65em; */
        }
    @media (min-width: 2560px) {
        /* height:60em; */
        /* width:70em; */
        }
`
const Dots = styled.div`
    direction:ltr;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    /* margin-bottom:1em; */
    bottom:1.8em;
    width:75%;
    /* height:100%; */
    /* top:11.5em; */
    /* bottom:1em; */
    left:0em;
    /* bottom:0em; */
    @media (min-width: 1024px) {
        border:1px solid blue;
    }
`
const Img = styled.img`
    height:.3em;
    width:.3em;
    margin-left:0.05em;
    @media (min-width: 1024px) {
        margin-left:.2em;
        height:1.2em;
        width:1.2em;
    }
`
const Imgb = styled.img`
    height:.35em;
    width:.35em;
    margin-left:0.05em;
    @media (min-width: 1024px) {
        margin-left:.2em;
        height:1.45em;
        width:1.4em;
    }
`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    direction:rtl;
    align-items:flex-start;
    padding:0 3em;
    /* align-content:flex-start; */
    /* justify-content:flex-start; */
    width:45%;
    /* justify-content:flex-end; */
    /* margin-left:7.7em; */
    @media (min-width: 1024px) {
        /* margin:0 1.5em; */
        /* justify-content:center; */
        border:1px solid green;
        /* justify-self:center; */
        }
    @media (min-width: 1440px) {
        /* margin-right:3em; */
        }
    @media (min-width: 2560px) {
        /* margin-right:3.5em; */
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
    @media (min-width: 1920px) {
       font-size:1.8em;
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