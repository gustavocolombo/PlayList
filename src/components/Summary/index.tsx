import amazon from '../../assets/amazon.svg'
import disney from '../../assets/disney.svg'
import netflix from '../../assets/netflix.svg'
import play from '../../assets/play.png'

import {Container} from './styles'

export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Netflix</p>
          <img src={netflix} alt="netflix" />
        </header> 
        <strong>3 séries</strong>
      </div>

      <div>
        <header>
          <p>Amazon Prime video</p>
          <img src={amazon} alt="amazon prime video" />
        </header> 
        <strong>3 séries</strong>
      </div>

      <div>
        <header>
          <p>Disney+</p>
          <img src={disney} alt="disney plus" />
        </header> 
        <strong>3 séries</strong>
      </div>

      <div>
        <header>
          <p>Total de séries</p>
          <img src={play} alt="play series" />
        </header> 
        <strong>9 séries</strong>
      </div>
    </Container>
  )
}