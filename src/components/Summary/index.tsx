import { useContext } from 'react'

import amazon from '../../assets/amazon.svg'
import disney from '../../assets/disney.svg'
import netflix from '../../assets/netflix.svg'
import play from '../../assets/play.png'
import { SeriesContext } from '../../SeriesContext'

import {Container} from './styles'

export function Summary(){

  const {series} = useContext(SeriesContext);

  let total = 0;
  let totalNeflix = 0;
  let totalAmazon = 0;
  let totalDisney = 0;

  const seriesNetlix = series.filter(serie => serie.streaming === 'Netlix');

  if(seriesNetlix.length !== 0 ){
    totalNeflix += 1;
  }

  const seriesAmazon = series.filter(serie => serie.streaming === 'Amazon' || serie.streaming === 'Amazon Prime Video');

  if(seriesAmazon.length !== 0){
    totalAmazon += 1;
  }

  const seriesDisney = series.filter(series => series.streaming === 'Disney');

  if(seriesDisney.length !== 0 ){
    totalDisney += 1;
  }

  total = totalNeflix + totalAmazon + totalDisney;

  return(
    <Container>
      <div>
        <header>
          <p>Netflix</p>
          <img src={netflix} alt="netflix" />
        </header> 
        <strong>{totalNeflix}</strong>
      </div>

      <div>
        <header>
          <p>Amazon Prime video</p>
          <img src={amazon} alt="amazon prime video" />
        </header> 
        <strong>{totalAmazon}</strong>
      </div>

      <div>
        <header>
          <p>Disney+</p>
          <img src={disney} alt="disney plus" />
        </header> 
        <strong>{totalDisney}</strong>
      </div>

      <div>
        <header>
          <p>Total de séries</p>
          <img src={play} alt="play series" />
        </header> 
        <strong>{total}</strong>
      </div>
    </Container>
  )
}