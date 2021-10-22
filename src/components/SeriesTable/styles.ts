import styled from 'styled-components'


export const Container = styled.div`
  margin-top: 2rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    thead th{
      color: var(--title);
      font-weight: 500;
      padding: 1rem 2rem;
      line-height: 1.5rem;
      text-align: left;
    }

    tbody td{
      color: var(--text); 
      padding: 1rem 2rem;
      border: 0;
      background: #FFF;
      transition: 0.4s;
    }
  }
`
