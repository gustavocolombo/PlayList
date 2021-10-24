import { Routest } from './routes/Routes';
import { SeriesProvider } from './SeriesContext';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <SeriesProvider>
      <Routest/>
      <GlobalStyle/>
    </SeriesProvider>
  );
}

export default App;
