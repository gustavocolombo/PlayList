import { useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Container, ContentWrapper } from './styles'

interface IHeaderProps{
  handleOpenModal: () => void
}

export function Header({handleOpenModal}: IHeaderProps){

  const [hours, setHours] = useState('');

  useEffect(()=> {
    const date = new Date().getHours();

    if(date < 12){
      setHours('Bom dia!')
    }else if(date >= 12 && date <= 18){
      setHours('Boa tarde!')
    }else{
      setHours('Boa noite!')
    }
  }, [])
 
  return(
    <Container>
      <ContentWrapper>
        <div>
          <button>
            <a href="/">
              <FiArrowLeft color="#FFF"/>
            </a>
          </button>
          <h3>{hours}</h3>
        </div>
        <button onClick={handleOpenModal}>
          Nova série
        </button>

      </ContentWrapper>
    </Container>
  )
}