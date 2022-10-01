import styled from "styled-components";


export const Container = styled.div`
  background-color: #28262E;

  display: flex;
  justify-content: space-around;

`

export const Logo = styled.div`
    width: 750px;

    display: flex;

    align-items: center;
    justify-content: center;

    p {
      margin-left: 50px;
      width:300px
    }

`
export const Info = styled.div`
`

export const Menu = styled.div`
  display: flex;
`

export const Exit = styled.div`
  width: 200px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .icon-exit{
    color:#F75A68;

    :hover{
      color:red;
      transition: color 0.2s;
    }
  }
`
