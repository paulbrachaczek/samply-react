import * as axios from "axios";

export default class Api {
  constructor() {
    this.client = null;
    this.api_url = 'http://private-anon-b8a5052e41-smaplypersonastest.apiary-mock.com/personas';
  }

  init = () => {
    let headers = {
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getPersona = (id) => {
    return this.init().get(`/${id}`);
  };

  updatePersona = (id) => {
    return this.init().put(`/${id}`);
  };

  getFields = (id) => {
    return this.init().get(`/${id}/fields`)
  }

  deleteField = (personaId, fieldId) => {
    return this.init().delete(`/${personaId}/fields/${fieldId}`);
  }

  updateField = (personaId, fieldId, fieldContent) => {
    return this.init().put(`/${personaId}/fields/${fieldId}`, fieldContent);
  }

  createField = (personaId, fieldContent) => {
    return this.init().post(`/${personaId}/fields`, fieldContent);
  }
  
}