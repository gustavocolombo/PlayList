import { useContext } from 'react';
import { SeriesContext } from '../../SeriesContext';
import { Container } from './styles';

export function SeriesTable() {

  const {series} = useContext(SeriesContext);

  return (
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
         {series.map(serie => (
          <tr key={serie.name}>
            <td>{serie.name}</td>
            <td>{serie.streaming}</td>
            <td>{serie.nacionality}</td>
            <td>{serie.season}</td>
            <td>{serie.season_left}</td>
          </tr>
         ))}
        </tbody>
      </table>
    </Container>
  );
}
