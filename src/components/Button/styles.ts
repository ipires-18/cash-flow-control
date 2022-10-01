import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  button {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.75rem;

    border:0;
    padding: 1rem;
    background: transparent;
    border:1px solid #33CC85;
    color:#33CC85;
    font-weight: bold;
    border-radius: 6px;

    &:hover{
      background: transparent;
      border:1px solid #FFFFFF;
      color:#FFFFFF;
      transition: background-color 0.2s color 0.2s border-color 0.2s;
    }
  }
   

`