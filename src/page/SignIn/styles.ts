import styled from "styled-components";

import bannerImg from '../../assets/img/banner.jpg'

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  place-content:center;

  width: 100%;
  max-width: 800px;

  form {
    width: 340px;
    text-align: center;

    h1{
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #3E3B47;
      padding: 16px;
      width: 100%;
      color: #FFFFFF;

      & + input {
        margin-top: 8px;
      }

     & ::placeholder{
        color:#FFFFFF;
      }

    }

    button {
      background: #999591;
      
      padding: 0 16px;
      width: 100%;
      height: 56px;
      
      border: 0;
      border-radius: 10px;
      
      color: #FFFFFF;
      font-weight: bold;

      margin-top: 16px;
    }

  }

`

export const Background = styled.div`
 flex:1;
 background: url(${bannerImg}) no-repeat center;
 background-size:cover;

`