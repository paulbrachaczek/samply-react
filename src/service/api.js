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

  getFields = (id) => {
    return this.init().get(`/${id}/fields`)
  }

  
}