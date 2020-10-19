import React from 'react';
import Header from './components/header/header.component'
import Sidebar from './components/sidebar/sidebar.component';
import './App.css';
import PersonaHeader from './components/persona-header/persona-header.component';
import Api from './service/api';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FieldsContainer } from './components/fields-container/fields-container';
import {connect} from 'react-redux';
import { setPersona } from './redux/persona/persona.actions';
import { setWideFields } from './redux/wideFields/wide-fields.actions';
import { setThinFields } from './redux/thinFields/thin-fields.actions';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      personaId: 1,
      thin: [
        {
          "id": 101,
          "title": "Image",
          "field_type": "Image",
          "data": "http://www.fillmurray.com/200/200",
          "column_id": 1,
          "prev_id": {},
          "next_id": 102
        },
        {
          "id": 102,
          "title": "Age",
          "field_type": "short_text",
          "data": "37",
          "column_id": 1,
          "prev_id": 101,
          "next_id": 103
        },
        {
          "id": 103,
          "title": "Gender",
          "field_type": "short_text",
          "data": "Not defined",
          "column_id": 1,
          "prev_id": 102,
          "next_id": {}
        },
        {
            "id": 104,
            "title": "Images mood",
            "field_type": "image_gallery",
            "data": [
              {image: null},
              {image: "http://www.fillmurray.com/200/200"},
              {image: "http://www.fillmurray.com/200/200"}
            ],
            "column_id": 1,
            "prev_id": 103,
            "next_id": {}
        }
      ],
      wide: []
    }
  }

  api = new Api();

  async fetchPersona () {
    const {setPersona} = this.props;
    const {personaId} = this.state;
    const {data} = await this.api.getPersona(personaId)

    setPersona(data);
  }

  async fetchFields () {
    const {setWideFields} = this.props;
    const {personaId} = this.state;
    const {data} = await this.api.getFields(personaId);
    

    setWideFields(data);
  }

  componentDidMount() {
    const {setThinFields} = this.props;
    
    this.fetchPersona();
    this.fetchFields();
    setThinFields(this.state.thin);
  }
  
  render() {
    const {currentPersona, wideFields, thinFields} = this.props;
    return (
      <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Header />
        <main className="o-main"> 
            {currentPersona ? <PersonaHeader /> : 'loading..'}
            <div className="m-fields-grid">
              {thinFields ? <FieldsContainer fields={thinFields} size="thin"/> : <p>loading...</p>}
              {wideFields ? <FieldsContainer fields={wideFields} /> : <p>loading fields..</p>}
            </div>
            <Sidebar />
          
        </main>
      </DndProvider>
      </div>
    )
  }
}

const mapStateToProps = ({persona, wide, thin}) => ({
  currentPersona: persona.currentPersona,
  wideFields: wide.wideFields,
  thinFields: thin.thinFields
});

const mapDispachToProps = dispatch => ({
  setPersona: persona => dispatch(setPersona(persona)),
  setWideFields: fields => dispatch(setWideFields(fields)),
  setThinFields: fields => dispatch(setThinFields(fields))
});

export default connect(mapStateToProps, mapDispachToProps)(App);
