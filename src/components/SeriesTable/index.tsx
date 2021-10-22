import {Container} from './styles'

export function SeriesTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Serviço/Streaming</th>
            <th>Nacionalidade</th>
            <th>Temporadas totais</th>
            <th>Temporadas restantes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>The Office</td>
            <td>Amazon Prime Video</td>
            <td>Americana</td>
            <td>9</td>
            <td>2</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>The Boys</td>
            <td>Amazon Prime Video</td>
            <td>Americana</td>
            <td>2</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}