import React,{Component} from 'react'
import styled from 'styled-components'

import background from '../images/background.jpg'

class Bottom extends Component {
  render() {
    return (
    <Div>
        <Text>
            <H1>מכבי חיפה איתכם גם באימייל</H1>
            <H5>הצטרפו אלינו ותוכלו לקבל עדכונים שוטפים ישירות מהמועדון!</H5>
        </Text>
        <Search placeholder="כתובת אימייל:"></Search>
        <Button>שלח</Button>
    </Div>
    );
  }
}

export default Bottom;

const Div = styled.div`
    height:3em;
    background:url(${background});
    display:flex;
    align-items:center;
    padding-right:1em;
    flex-direction:row;
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
const H1 = styled.h1`
    font-size:0.32em;
    font-weight:700;
    color:#f4f5fa;
    margin-bottom:-1.2em;
    direction:rtl;
    @media (min-width: 425px) {
        font-size:0.4em;
        }
    @media (min-width: 768px) {
        font-size:.9em;
        }
    @media (min-width: 1024px) {
        font-size:1em;
        }
    @media (min-width: 1920px) {
       font-size:1.5em;
        }
    @media (min-width: 2560px) {
        font-size:1.6em;
        }
`
const H5 = styled.h5`
    font-size:0.32em;
    color:#f4f5fa;
    direction:rtl;
    @media (min-width: 425px) {
        font-size:0.35em;
        }
    @media (min-width: 768px) {
        font-size:.82em;
        margin-top:1.25em;
        }
    @media (min-width: 1024px) {
        font-size:.9em;
        }
    @media (min-width: 1440px) {
        font-size:1.1em;
        }
    @media (min-width: 1920px) {
       font-size:1.5em;
        }
    @media (min-width: 2560px) {
        font-size:1.5em;
        }
`
const Text = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:1.3em;
    @media (min-width: 375px) {
        margin-left:1.75em;   
}
    @media (min-width: 425px) {
        margin-left:2em;
}
    @media (min-width: 1024px) {
        margin-left:2.5em;
}
    @media(min-width:1440px){
        margin-left:0em;
    }
    @media (min-width: 2560px) {
        margin:0 10em;
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
       /* height:4em; */
       font-size:.7em;
        }
    @media (min-width: 1024px) {
        width:26em;
        font-size:.8em;
        margin-right:5em;
        }
    @media (min-width: 1440px) {
        width:28em;
        font-size:1em;
        margin-right:6em;
        }
    @media (min-width: 1920px) {
       font-size:1.5em;
       margin-right:3em;
        }
    @media (min-width: 2560px) {
        font-size:1.6em;
        width:30em;
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
        margin-top:-.2em;
        margin-right:.5em;
        font-size:.8em;
        }
    @media (min-width: 1440px) {
        font-size:1em;       
        width:6em;
        }
    @media (min-width: 1920px) {
       font-size:1.4em;
       width:5em;
        }
    @media (min-width: 2560px) {
        font-size:1.6em;
        }
`