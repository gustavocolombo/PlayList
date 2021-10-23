import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { api } from '../../services/api';
import { Container } from './styles'

interface NewSerieModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewSerieModal({isOpen, onRequestClose}: NewSerieModalProps){

  const [name, setName] = useState('');
  const [streaming, setStreaming] = useState('');
  const [nacionality, setNacionality] = useState('');
  const [season, setSeason] = useState(0);
  const [season_left, setSeasonLeft] = useState(0);

  function handleSubmitNewSerie(event: FormEvent){
    event.preventDefault();

    api.post('series').then((response: any) => response.data.transactions)
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="reactmodal"
      overlayClassName="reactmodaloverlay"
    >

    <Container onSubmit={handleSubmitNewSerie}>
      <h2>Cadastrar nova série</h2>

        <input name="name" type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <input name="streaming" type="text" placeholder="Serviço/Streaming" value={streaming} onChange={(event) => setStreaming(event.target.value)}/>
        <input name="nacionality" type="text" placeholder="Nacionalidade" value={nacionality} onChange={(event) => setNacionality(event.target.value)} />
        <input name="season" type="number" placeholder="Temporadas totais" value={season} onChange={(event) => setSeason(Number(event.target.value))} />
        <input name="season_left" type="number" placeholder="Temporadas restantes" value={season_left} onChange={(event) => setSeasonLeft(Number(event.target.value))} />
        
        <button type="submit">
          Cadastrar série
        </button>
    </Container>
     
    </Modal>
  )
}