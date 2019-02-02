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
    <Div>
      <Bline>
        <Img src={tri}></Img>
      </Bline>
      <Header>
        <P>יום שני 06/03/2017 ,21:00</P>
        <P>ליגת העל,איצטדיון סמי עופר</P>
        <Arrows>
            <Left src={left}></Left>
            <HaLogo src={Hapoel}></HaLogo>
            <H1>הפועל תל אביב</H1>
            <Vs>VS</Vs>
            <H1>מכבי חיפה</H1>
            <HaiLogo src={Haifa}></HaiLogo>
            <Right src={right}></Right>
        </Arrows>
            <BDiv>
            <Buy>רכישת כרטיס</Buy>
            </BDiv>
      </Header>
      <Content>
          <Players src={haifaPlayers}></Players>
          <Text>
          <H1>מכירת מנויים וכרטיסים - עונת 2016/2017</H1>
            <H5>רכישת מנויים:</H5>
            <P>רכישת מנויים נמשכת!</P>
            <P>מנוי ליציע הכסף,גוש 301 ב-700 ש"ח בלבד</P>
            <P>מנויים ליציע הדרומי והצפוני במחיר 500 ש"ח</P>
            <H5>רכישת כרטיסים:</H5>
            <P>* לרכישה קבוצתית של כרטיסים לטובת ימי גיבוש,ימי כיף,</P>
            <P>ימי הולדת ואירועים אחרים, יש לשלוח מייל</P>
            <P> לכתובת: <Span>Tickets4@MaccabiHaifaFC.com</Span></P>
            <P1>* להזכירם,בהזמנת כרטיסים בהדפסה ביתית דרך אתר האינטרנט</P1>
            <P>או האפליקציה לא נגבים דמי טיפול</P>
            <H54>מחיר מנוי לכסף פרימיום -מחיר מלא: 3,000 ש"ח</H54>
            <H55>ועכשיו מחיר מיוחד -2,000 ש"ח בלבד.</H55>
            <H55>נותרו מקומות אחרונים.</H55>
          </Text>
      </Content>
    </Div>
    );
  }
}

export default Tickets;

const Div = styled.div`
    height:12em;
    display:flex;
    flex-direction:column;
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
const BDiv = styled.div`
   
`
const Bline = styled.div`
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
const Img = styled.img`
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
    @media (min-width: 2560px) {
        height:1.5em;
        width:1.5em;
        margin-left:10em;
        }
`
const Header = styled.div`
    background:#f4f5fa;
    padding-top:.8em;
    height:2.5em;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (min-width: 768px) {
        height:3em;
        padding:2em 0;
        }
    @media (min-width: 1024px) {
        padding: 1.8em 0 2.2em 0;
        }
    @media (min-width: 1440px) {
        height:3.5em;
        }
    @media (min-width: 2560px) {
        height:8em;
        padding: 2.8em;
        }
`
const Buy = styled.button`
    color:white;
    background:green;
    border-radius:.8em;
    outline:none;
    border:none;
    margin-top:1em;
    margin-left:2em;
    padding:.2em 1em;
    &:hover{
    transform: scale(1.05); 
    }
    @media (min-width: 320px) {
    font-size:.2em;
    }
    @media (min-width: 768px) {
     font-size:.6em;
     margin-top:2.5em;
        }
    @media (min-width: 1024px) {
      font-size:.7em;
      margin-top:1.5em;
      margin-left:3em;
        }
    @media (min-width: 1440px) {
      margin-left:3.5em;
      font-size:.8em;
        }
    @media (min-width: 2560px) {
       font-size:1.5em;
       margin-left:6em;
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
        font-size:1em;
        margin-top:-1em;
        }
    @media (min-width: 1440px) {
        font-size:1.1em;
        }
    @media (min-width: 2560px) {
        font-size:2em;
        }
`
const Arrows = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:-.8em;
    @media (min-width: 320px) {
        margin-top:.1em;
        margin-bottom:-.25em;
    }
    @media (min-width: 1024px) {
        margin-top:-.2em;
        padding-bottom:0.4em;
    }
`

const Left = styled.img`
    height:1em;
    width:1em;
    margin:0 1.1em;
    @media (min-width: 768px) {
        height:2em;
        width:2em;
        }
    @media (min-width: 1024px) {
        height:2.5em;
        width:2.5em;
        }
    @media (min-width: 2560px) {
        height:4em;
        width:4em;
        }
`
const Right = styled(Left)``
const HaLogo = styled.img`
    height:1.4em;
    width:1.2em;
    margin:0 .6em;
    @media (min-width: 375px) {
        margin:0 1.2em;
        }
    @media (min-width: 425px) {
        margin:0 1.7em;
        }
    @media (min-width: 768px) {
       height:3.8em;
       width:3.6em;
       margin:0 2.4em;
        }
    @media (min-width: 1024px) {
        height:5em;
        width:4.2em;
        margin: 0 2.8em;
        }
    @media (min-width: 2560px) {
        height:8em;
        width:7.5em;
        margin: 0 4em;
        }
`
const HaiLogo = styled(HaLogo)`    
    @media (min-width: 1024px) {
    height:5em;
    width:4.5em;
}
@media (min-width: 2560px) {
        height:9em;
        width:8em;
        }
` 
const H1 = styled.p`
    font-size:.4em;
    font-weight:500;
    @media (min-width: 320px) {
        /* margin-bottom:1.5em; */
        }
    @media (min-width: 425px) {
        font-size:.4em;
}
    @media (min-width: 768px) {
        /* margin-bottom:-3em; */
        font-size:1em;
}
    @media (min-width: 1024px) {
        font-size:1.1em;
        margin-bottom:0.8em;
}
    @media (min-width: 1440px) {
        font-size:1.4em;
        }
    @media (min-width: 2560px) {
        font-size:2.5em;
        }
`
const Vs = styled.p`
    font-weight:800;
    font-size:.6em;
    margin:0 1em;
    @media (min-width: 375px) {
        margin:0 2em;
        }
    @media (min-width: 425px) {
        margin:0 2em;
        font-size:.7em;
        }
    @media (min-width: 768px) {
        font-size:1.4em;
        margin-top:.2em;
        }
    @media (min-width: 1024px) {
        font-size:1.5em;
        margin: 0 2.8em;
        }
    @media (min-width: 1440px) {
        margin: 0 5em;
        }
    @media (min-width: 2560px) {
        margin: 0 8em;
        font-size:2.7em;
        }
`
const Content = styled.div`
    margin-bottom:-1em;
    direction:rtl;
    display:flex;
    align-self:flex-end;
    @media (min-width: 425px) {
        margin-right:1em;
    }
    @media (min-width: 1024px) {
        margin-right:2em;
    }
`
const Players = styled.img`
    height:8.55em;
    width:11em;
    @media (min-width: 320px) {
    height:8em;
    margin-top:.45em;
}
    @media (min-width: 375px) {
        /* margin-left:1em;    */
}
    @media (min-width: 425px) {
        margin-left:.5em;
}
    @media (min-width: 768px) {
        height:16.5em;
        width:20em;
        margin-top:2em;
        /* margin-left:4em; */
}
    @media (min-width: 1024px) {
        height:22em;
        width:32em;
        margin-left:.5em;
        margin-top:0.45em;
}
    @media (min-width: 1440px) {
        height:26em;
        width:39em;
        margin-left:6em;
        margin-top:1em;
}
    @media (min-width: 2560px) {
       height:42em;
       width:64em;
       margin-top:3.8em;
       margin-left:8em;
}
`
const Text = styled.div`
    display:flex;
    flex-direction:column;
    @media (min-width: 320px) {
        margin-top:.2em;
        }
    @media (min-width: 1024px) {
        letter-spacing:.05em;
        align-self:center;
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
        margin-bottom:.9em;
        }
    @media (min-width: 1024px) {
        font-size:.9em;
        margin-bottom:1.1em;
        }
    @media (min-width: 1440px) {
        font-size:1.1em;
        }
    @media (min-width: 2560px) {
        font-size:1.7em;
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
`
const P1 =styled(P)`
    margin-top:.2em;
    @media (min-width: 320px) {
        font-size:.35em;
        }
    @media (min-width: 768px) {
        font-size:.65em;
        }
    @media (min-width: 1024px) {
        font-size:.8em;
        }
    @media (min-width: 1440px) {
        font-size:1em;
        }
    @media (min-width: 2560px) {
       font-size:1.8em;
        }
`
const H55= styled(H5)`
    margin-bottom:.5em;
    @media (min-width: 320px) {
        font-size:.35em;
        }
    @media (min-width: 768px) {
        font-size:.55em;
        }
    @media (min-width: 1024px) {
        font-size:.65em;
        }
    @media (min-width: 1440px) {
        font-size:.85em;
        }
    @media (min-width: 2560px) {
       font-size:1.5em;
        }
`
const H54= styled(H55)`
    margin-top:.4em;
    @media (min-width: 768px) {
        font-size:.55em;
        }
    @media (min-width: 1024px) {
        font-size:.65em;
        }
    @media (min-width: 1440px) {
        font-size:.85em;
        }
    @media (min-width: 2560px) {
       font-size:1.5em;
        }
`
