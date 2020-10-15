import React from 'react';
import Header from './components/header/header.component'
import Sidebar from './components/sidebar/sidebar.component';
import './App.css';
import PersonaHeader from './components/persona-header/persona-header.component';
import Api from './service/api';
import Field from './components/field/field';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      persona: null,
      thin: [
        {
          "id": 1,
          "title": "Image",
          "field_type": "Image",
          "data": "http://www.fillmurray.com/200/200",
          "column_id": 1,
          "prev_id": {},
          "next_id": 2
        },
        {
          "id": 2,
          "title": "Age",
          "field_type": "short_text",
          "data": "37",
          "column_id": 1,
          "prev_id": 1,
          "next_id": 3
        },
        {
          "id": 3,
          "title": "Gender",
          "field_type": "short_text",
          "data": "Not defined",
          "column_id": 1,
          "prev_id": 2,
          "next_id": {}
        }
      ],
      wide: []
    }
  }

  api = new Api();

  async fetchPersona () {
    return this.api.getPersona(1);
  }

  componentDidMount() {
    this.fetchPersona().then(data=>{
      this.setState({persona: data.data});

      console.log(this.state.persona);
    });

  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="o-main">
          {this.state.persona ? <PersonaHeader persona={this.state.persona}/> : 'loading'}
          <div class="m-fields-grid">
            <div className="m-fields -thin">
              {this.state.thin.map((field) => (
                <Field fkey={field.id} field={field}/>  
              ))}
            </div>
            <div className="m-fields -wide">
            dudu
            </div>
          </div>
        </main>
        <Sidebar />
      </div>
    )
  }
}

export default App;
