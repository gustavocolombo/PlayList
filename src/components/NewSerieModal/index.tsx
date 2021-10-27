import { FormEvent, useContext, useState } from 'react'
import { Container } from './styles'
import { SeriesContext } from '../../SeriesContext';
import Modal from 'react-modal'


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

  const { createSerie } = useContext(SeriesContext)

  async function handleSubmitNewSerie(event: FormEvent){
    event.preventDefault();

    await createSerie({name, nacionality, streaming, season, season_left});

    setName('');
    setNacionality('');
    setStreaming('');
    setSeason(0);
    setSeasonLeft(0);
    onRequestClose();
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