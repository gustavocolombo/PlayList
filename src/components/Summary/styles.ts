import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-top: -6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div{
    background: #FFF;
    padding: 1rem 2rem 0;
    border-radius: 0.7rem;
    transition: 0.4s;

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;

      p{
        font-size: 1.125rem;
        font-weight: 600;
      }
    }

    &:hover{
      box-shadow: 10px 10px 18px -11px rgba(0,0,0,0.74);
      -webkit-box-shadow: 10px 10px 18px -11px rgba(0,0,0,0.74);
      -moz-box-shadow: 10px 10px 18px -11px rgba(0,0,0,0.74);
    }

    strong{
      display: block;
      margin: 2rem;
      font-size: 2rem;
    }
  }
`