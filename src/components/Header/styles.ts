import styled from 'styled-components'

export const Container = styled.div`
  background: var(--black);
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  padding: 3rem 6rem 10rem;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3{
      margin-left: 1rem;
    }
  }

  button{
    padding: 0.9rem 1.4rem;
    background: var(--primary);
    color: #fff;
    font-size: 1rem;
    border: 0;
    border-radius: 0.5rem;
    transition: 0.5s;

    &:hover{
      filter: brightness(0.5);
    }
  }
` 