import styled from "styled-components";

export const Container = styled.form`

  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem auto;
  gap: 10px;
  
  width: 800px;

  input[type=date] {
    flex: 1;
    border-radius: 3px;
    border: 0;
    background-color: #121214;
    color:#FFFFFF;
    padding:1rem;


    ::placeholder{
      color: #7C7C8A;
    }
  }
  

  button{
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border:0;
    padding: 15px;
    background: transparent;
    border:1px solid #33CC95;
    color:#33CC95;
    font-weight: bold;
    border-radius: 3px;

    &:hover{
      background: transparent;
      border-color:1px solid #33CC95;
      color:#FFFFFF;
      transition: background-color 0.2s color 0.2s border-color 0.2s;
    }
  }

`