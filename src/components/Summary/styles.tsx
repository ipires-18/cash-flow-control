import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
  
  div {
    background: #323238;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: #FFFFFF;

    width: 400px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 1rem;
      line-height: 3rem;
      font-weight: 500;
    }
    
    &.total {
      color: #FFFFFF;
      background: #33CC95;
    }
  }
` 