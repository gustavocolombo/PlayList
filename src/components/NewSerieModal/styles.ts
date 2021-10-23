import styled from 'styled-components'

export const Container = styled.form`

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  h2{
    color: var(--title);
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  input{
    border: 0;
    border-radius: 0.5rem;
    padding: 1rem 1rem;
    width: 100%;

    & + input{
      margin-top: 1rem;
    }
  }

  button[type="submit"]{
    padding: 1rem 1rem;
    width: 100%;
    margin-top: 1rem;
    background: var(--green);
    border: 0;
    border-radius: 0.5rem;
    color: #FFF;
    transition: 0.4s;

    &:hover{
      filter: brightness(0.8);
    }
  }
 
`