import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs'

createServer({

  models:{
    series: Model
  },

  seeds(server){
    server.db.loadData({
      series:[
        {
          id: 1,
          name: 'the office',
          nacionality: 'americana',
          streaming: 'amazon prime video',
          season: 9,
          season_left: 2
        },
        {
          id: 2,
          name: 'the boys',
          nacionality: 'americana',
          streaming: 'amazon prime video',
          season: 2,
          season_left: 1
        }
      ]
    })
  },

  routes(){
    this.namespace = "api"

    this.get('/series',() =>{
      return this.schema.all('series')
    })

    this.post('/series', (schema, request) => {
       const data = JSON.parse(request.requestBody);

       return schema.create('series', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);