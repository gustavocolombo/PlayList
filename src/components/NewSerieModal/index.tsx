import Modal from 'react-modal'
import { Container } from './styles'

interface NewSerieModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewSerieModal({isOpen, onRequestClose}: NewSerieModalProps){
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="reactmodal"
      overlayClassName="reactmodaloverlay"
    >

    <Container>
    <h2>Cadastrar nova série</h2>

        <input name="name" type="text" placeholder="Name"/>
        <input name="streaming" type="text" placeholder="Serviço/Streaming"/>
        <input name="nacionality" type="text" placeholder="Nacionalidade"/>
        <input name="season" type="number" placeholder="Temporadas totais"/>
        <input name="season_left" type="number" placeholder="Temporadas restantes"/>
        
        <button type="submit">
          Cadastrar série
        </button>
    </Container>
     
    </Modal>
  )
}