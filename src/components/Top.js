import React,{Component} from 'react'
import styled,{keyframes} from 'styled-components'

import facebook from '../images/facebook.png'
import background from '../images/fans_background.jpg'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import haifalogo from '../images/haifalogo.png'

class Top extends Component{
    render(){
        return(
            <Div>
                <Topbar>
                    <Ul>
                        <Li>רכישת מנוי</Li>
                        <Li>כרטיסים</Li>
                        <Li>חנות המוצרים</Li>
                        <Li> המועדון</Li>
                        <Li>הסטוריה</Li>
                        <Li>אצטדיון סמי עופר</Li>
                    </Ul>
                    <UlIcons>
                        <Img src={facebook}></Img>
                        <Img src={instagram}></Img>
                        <Img src={twitter}></Img>
                    </UlIcons>
                </Topbar>
                <TopbarContent>
                    <HaifaLogo src={haifalogo}></HaifaLogo>
                    <TextDiv>
                        <H1>מכבי חיפה</H1>
                        <P>עונת 2016-2017</P>
                        <Buttons>
                            <Button>רכישת מנוי</Button>
                            <Button>רכישת כרטיס</Button>
                        </Buttons>
                    </TextDiv>
                </TopbarContent>
            </Div>
        )
    }
}
export default Top

const zoom = keyframes`
  0%{background-position:38% 0%;
    background-size:100%}
  50%{background-position:63% 100%;
    background-size:110%}
  100%{background-position:38% 0%;
    background-size:100%} 
`;
const Div = styled.div`
    background:url(${background});
    background-size:cover;
    background-repeat:no-repeat;
    animation: ${zoom} 14s linear infinite;
    height:12em;
    @media (min-width: 320px) {
        
        }
    @media (min-width: 768px) {
         height:26em;
        }
    @media (max-width: 768px) {
         animation:none;
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
const Topbar = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:1.5em;
    background-color: rgb(4, 27, 4);
    direction:rtl;
    opacity:0.6;
    @media (min-width: 375px) {
        margin-bottom:-1.5em;
}
    @media (min-width: 768px) {
        height:3em;
}
    @media (min-width: 1024px) {
        height:3.9em;
}
    @media (min-width: 1440px) {
        height:4.3em;
}
    @media (min-width: 1920px) {
       height:5.5em;
}
    @media (min-width: 2560px) {
        height:8em;
}
`
const Ul = styled.ul`
    display:flex;
    justify-content:flex-start;
    list-style-type:none;
`
const Li = styled.li`
    font-size:0.35em;
    color: white;
    margin-left:.9em;
        transition: all .2s ease-in-out;
    &:hover{
    transform: scale(1.15); 
    }
    @media (min-width: 768px) {
        font-size:.85em;
        }
    @media (min-width: 1024px) {
        font-size:.9em;
        }
    @media (min-width: 1440px) {
        font-size:1em;
        }
    @media (min-width: 1920px) {
       font-size:1.3em;
        }
    @media (min-width: 2560px) {
        font-size:2.1em;
        }
`
const Img = styled.img`
    height:.54em;
    width:.54em;
    margin-right:.1em;
    &:hover{
    transform: scale(1.05); 
    border:.1em solid whitesmoke;;
    border-radius:100%;
    }
    @media (min-width: 768px) {
         height:1.3em;
         width:1.3em;
         margin-right:.2em;
        }
    @media (min-width: 1024px) {
        height:1.4em;
        width:1.4em;
        }
    @media (min-width: 1440px) {
        height:1.5em;
        width:1.5em;
        }
    @media (min-width: 1920px) {
       height:2em;
       width:2em;
        }
    @media (min-width: 2560px) {
        height:3em;
        width:3em;
        margin-left:0.25em;
        }
`
const UlIcons = styled(Ul)`
    margin-left:.8em;
    @media (min-width: 2560px) {
        margin-left:2em;
        }
`
const TopbarContent = styled.div`
    display:flex;
    margin-top:.2em;
    align-content:center;
    direction:rtl;
`
const HaifaLogo = styled.img`
    height:7.5em;
    width:7em;
    margin-top:0.7em;
    @media (min-width: 375px) {
        margin-top:1.6em;
        height:8.4em;
        width:7.5em;
}
    @media (min-width: 425px) {
        margin-top:1.5em;
        margin-right:.5em;
        margin-left:.8em;
        height:8.8em;
        width:7.7em;
}
    @media (min-width: 768px) {
        height:16em;
        width:15em;
        margin-top:3em;
}
    @media (min-width: 1024px) {
        height:20em;
        width:18em;
        margin-left:1.5em;
        margin-right:1em;
}
    @media (min-width: 1440px) {
        height:22.5em;
        width:21em;
        margin-top:3.5em;
        margin-right:0.6em;
        margin-left:1em;
}
@media (min-width: 1920px) {
        height:30em;
        width:26em;
        margin-top:10em;
        margin-right:2em;
}
        @media (min-width: 2560px) {
        height:40em;
        width:36em;
        margin:4em;
}
`
const TextDiv = styled.div`
    display:flex;
    flex-direction:column;
    @media (min-width: 375px) {
        margin-top:.5em;
    }
    @media (min-width: 425px) {
        margin-top:.1em;
    }
    @media (min-width: 1440px) {
        margin-top:-3.1em;
        margin-right:1em;
    }
    @media (min-width: 1920px) {
        margin-top:-3em;             
}
        @media (min-width: 2560px) {
        margin-top:-5em;
    }
`
const H1= styled.p`
    font-size:1.6em;
    font-weight:700;
    color:#f4f5fa;
    margin:1.5em 0 -1em 0;
    @media (min-width: 375px) {
        font-size:2em;
}
    @media (min-width: 425px) {
        font-size:2.2em;      
}
    @media (min-width: 768px) {
        font-size:4em;
}
    @media (min-width: 1024px) {
        font-size:4.5em;
}
    @media (min-width: 1440px) {
        font-size:6.4em;
}
@media (min-width: 1920px) {
        font-size:10.5em;      
        letter-spacing:.03em;       
}
    @media (min-width: 2560px) {
        font-size:11em;
        }
`
const P = styled.p`
    color:#f4f5fa;
    font-weight:100;
    font-size:1.5em;
    @media (min-width: 375px) {
        font-size:1.8em;
}
    @media (min-width: 425px) {
        font-size:1.9em;        
}
    @media (min-width: 768px) {
        font-size:3.5em;
}
    @media (min-width: 1024px) {
        font-size:4.2em;
}
    @media (min-width: 1440px) {
        font-size:5.6em;
}
@media (min-width: 1920px) {
        font-size:8.5em;
        letter-spacing:.01em;       
}
    @media (min-width: 2560px) {
        font-size:9em;
}
`
const Buttons= styled.div`
    margin-top:-1.5em;
    @media (min-width: 375px) {
        margin-top:-1.85em;
    }
    @media (min-width: 425px) {
        margin-top:-2.1em;   
    }
    @media(min-width:1024px){
        margin-top:-3.2em;
    }
    @media (min-width: 1440px) {
        margin-top:-4.2em;
        }
    @media (min-width: 1920px) {
        margin-top:-7.2em;
        }
    @media (min-width: 2560px) {
        margin-top:-7em;
        }
` 
const Button = styled.button`
    font-size:0.4em;
    margin-left:0.8em;
    background-color:#f4f5fa;
    color:#007738;
    border-radius:0.7em;
    border:none;
    outline:none;
    &:hover{
    transform: scale(1.15); 
    border:1px solid lightgrey;
    }
    @media (min-width: 768px) {
        font-size:1em;
        width:6em;
}
    @media (min-width: 1024px) {
        font-size:1.2em;
        width:7em;
}
    @media (min-width: 1440px) {
        font-size:1.5em;
        width:8em;
}
@media (min-width: 1920px) {
        font-size:2em;
        width:8.5em;
}

    @media (min-width: 2560px) {
        font-size:2.3em;
}
`
