import { useState } from "react";
import { Header } from "../../components/Header/index";
import { Summary } from "../../components/Summary";
import { Container } from "./styles";
import { SeriesTable } from "../../components/SeriesTable";
import { NewSerieModal } from "../../components/NewSerieModal";

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
        <NewSerieModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} />
       <Summary/>
       <SeriesTable/>
     </Container>
   </>
  )
}