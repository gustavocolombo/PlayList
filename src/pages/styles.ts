import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--black);
`

export const ContentWrapper = styled.div`
  width: 100vw;
  max-width: 1120px;
  height: 100vh;
  max-height: 720px;
  color: #FFF;

  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: space-between;

  padding: 7rem 0rem;

  main{
    max-width: 400px;

    h1{
      line-height: 3rem;
      font-size: 3rem;
      font-weight: 600;
    }

    p{
      margin-top: 2rem;
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--green)
    }
  }

  button{
    margin-top: 3rem;
    width: 80px;
    height: 80px;
    border: 0;
    border-radius: 30px;
    transition: 0.3s;
    background: var(--primary-light);

    &:hover{
      background: var(--primary);
    }

    a {
      text-decoration: none;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .images{
    display: flex;
    align-items: center;
    flex-direction: column;

    .netflix{
      width: 25rem;
      height: 22rem;
    }
  }
`