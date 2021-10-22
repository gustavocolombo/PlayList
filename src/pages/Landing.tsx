import { FiArrowRight } from 'react-icons/fi'
import {Container, ContentWrapper, Content} from './styles'
import netflix from '../assets/netflix.svg'

export function Landing(){
  return(
    <Container>
      <ContentWrapper>
        <Content>
          <main>
          <h1>O seu lugar de organizar e por em dia as séries que ainda não começou assistir</h1>
          <p>Crie uma lista com as séries de qualquer serviço de streaming para se recordar 
            de assistir e pare de ficar perdido na conversa com os amigos</p>
          </main>

          <div className="images">
            <img src={netflix} alt="stark" className="netflix"/>
          </div>
        </Content>

        <button>
          <a href="/content">
            <FiArrowRight size={25} color="#FFF"/>
          </a >
        </button>
      </ContentWrapper>
    </Container>
  )
}