import styled from "styled-components";

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Text = styled.div`
  display: flex;
  width: auto;
  font-size: 45px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
`

export const StyledImg = styled.img`
  width: 440px;
  height: 290px;
  opacity: ${props => props.disabled ? 0.4 : 1};
  transition-duration: 0.5s;
  transition-delay: 0ms;
  border: ${props => props.selected ? '4px solid #e37bd2' : '0px solid #e37bd2'} ;
  border-radius: 15px;
  cursor: ${props => props.disabled ? 'auto' : 'pointer'};
  :hover{
    transform: ${props => props.disabled ? 'none' : 'scale(1.05)'};
  }
`

export const EndMessage = styled.div`
  font-size: 60px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  position: fixed;
  right: 30px;
  bottom: 300px;
  width: 300px;
  height: auto;
`

export const MiniMashaImg = styled.img`
  position: fixed;
  right: 0px;
  bottom: 0;
  width: 300px;
  height: auto;
`

export const MashaImg = styled.img`
  position: fixed;
  right: 150px;
  bottom: 0;
  width: 300px;
  height: auto;
`

export const AnswerImg = styled.img`
  position: fixed;
  right: 15px;
  bottom: 250px;
  width: 250px;
  height: auto;
`