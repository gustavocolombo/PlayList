import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Series{
  id: number;
  name: string;
  streaming: string;
  nacionality: string;
  season: number;
  season_left: number;
}

type ISeries = Omit<Series, 'id'>

interface ICreateSerie{
  series: Series[];
  createSerie: (serie: ISeries) => Promise<void>
}

interface SeriesContextProvider{
  children: ReactNode
}

export const SeriesContext = createContext<ICreateSerie>({} as ICreateSerie);

export function SeriesProvider({children}: SeriesContextProvider){
  const [series, setSeries] = useState<Series[]>([]);

  useEffect(()=>{
    api.get('series').then((response: any) => setSeries(response.data.series));
  }, [])

  async function createSerie(serieInput: ISeries){
    const response = await api.post('/series', serieInput);
    const { series: newSeries } = response.data as any;

    setSeries([...series, newSeries ]);
  }

  return (
    <SeriesContext.Provider value={{series, createSerie}}>
      {children}
    </SeriesContext.Provider>
  )
}