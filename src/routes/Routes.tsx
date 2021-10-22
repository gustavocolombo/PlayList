import { Route, BrowserRouter } from 'react-router-dom'
import { Content } from '../pages/Content/Content'
import { Landing } from '../pages/Landing'

export function Routest(){
  return(
    <BrowserRouter>
      <Route component={Landing} path="/" exact/>
      <Route component={Content} path="/content" exact={true}/>
    </BrowserRouter>
  )
}