import { useState } from "react";
import { Header } from "../../components/Header/index";
import { Summary } from "../../components/Summary";
import { Container } from "./styles";
import Modal from 'react-modal'
import { SeriesTable } from "../../components/SeriesTable";

export function Content(){

  const [modalIsOpen, setModalIsIOpen] = useState(false);

  function handleOpenModal(){
    setModalIsIOpen(true)
  }

  function handleCloseModal(){
    setModalIsIOpen(false)
  }

  return (
   <>
     <Header handleOpenModal={handleOpenModal}/>
     <Container>

     <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
      >
        <h2>Cadastrar nova série</h2>
      </Modal>

       <Summary/>
       <SeriesTable/>
     </Container>
   </>
  )
}