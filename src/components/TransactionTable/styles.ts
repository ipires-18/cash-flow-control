import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  table {
    max-width: 1300px;
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      padding: 1rem 2rem;
      line-height: 1.5rem;

      border: 0;
      

      background-color: #29292E;

      &:first-child {
        border-start-start-radius: 3px;
        border-end-start-radius: 3px;
      }

      &:last-child {
        border-end-end-radius: 3px;
        border-start-end-radius: 3px;
      }
    }

    td {
      text-align: center;
      padding: 1rem 2rem;
      border: 0;

      background-color: #29292E;

      &:first-child {
        color: #FFFFFF;
        border-start-start-radius: 3px;
        border-end-start-radius: 3px;
      }
      &:last-child {
        border-end-end-radius: 3px;
        border-start-end-radius: 3px;
      }
      &.deposit {
        color: #33CC95;
      }
      &.withdraw {
        color: #E62E4D;
      }
    }

  }
`