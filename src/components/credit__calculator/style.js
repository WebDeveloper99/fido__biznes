import styled from "styled-components";
import MuiInput from '@mui/material/Input';
import {Button} from '@mui/material'

export const Container =  styled.div`
display: flex;
flex-direction: column;
width: 1480px;
height: auto;
margin: 140px auto;
padding: 40px 60px;
border-radius: 20px;
justify-content: center;
background-color: #fff;

`

export const Main =  styled.div`
display: flex;
margin-bottom: 50px;

`


export const Title = styled.div`
display:  flex;
font-size: ${({fs})=> fs ? fs : ''};
font-weight: bold;
margin: ${({m})=> m ? m : ''};

`

export const Left = styled.div`
display:  flex;
flex-direction: column;
flex: 2;

`

export const KType = styled.div`
display:  flex;
flex-direction: column;

`

KType.Method = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

`
KType.SelectMethod = styled.div`
display: flex;
`
KType.SwitchMethod = styled.div`
display: flex;
`


KType.Pay = styled.div`
display: flex;
margin-top: 20px;

`


export const KSumm = styled.div`
display:  flex;
flex-direction: column;
position: relative;

.MuiInputBase-root{
    width: 70px;
    font-size: 30px;
}

`

KSumm.Input = styled(MuiInput)`
width: 42px;
font-weight: 500;
font-size: 16px;
position: absolute;
top: 0;
left: 100%;

`


export const KTime = styled.div`
display:  flex;
flex-direction: column;

.MuiInputBase-root{
    width: 70px;
    font-size: 30px;
}

`


export const Right = styled.div`
display:  flex;
flex: 1;
width: 100%;


`

export const Card = styled.div`
display: flex;
flex-direction: column;
width: 80%;
padding: 30px;
border-radius: 12px;
box-shadow: 2px 8px 56px 0px rgba(34, 60, 80, 0.32);

`


Card.Pay = styled.h1`
display: flex;
color: blue;

`

Card.Description = styled.div`
display: flex;
font-size: 14px;
font-weight: 400;
color: gray;

`

export const MyButton = styled(Button)`
display: flex;
border: 1px solid red;

`