import { env } from "./base/env"

class CheckService {
    _apiBase = `https://${env.JF_API_HOST}/api/`;
    _apiKey = "no";
    getResourse = async (url) => {
      let res = await fetch(url);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }
  
      return await res.json();
    };
  
    getServices = async (name) => {
      
      var username = env.JF_USERNAME;
      var password = env.JF_PASSWORD;
      var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
      var header = {'Host': `${env.JF_API_HOST}`, 'Authorization': auth};
      var request = client.request('GET', '/', header);

      const res = await this.getResourse(
        `${this._apiBase}containers`
      );
      // we wil get it
      const res2 = {"containers":[{"commands":"--restart=always","description":"","image":"jnqa/docker-updater","name":"docker-controller","portIn":"5000","portOut":"4699","running":true,"uri":"https://api.jnqa.fun/api/containers/1","version":"v0.1.8"},{"commands":"--restart=always","description":"","image":"jnqa/fun","name":"jq-fun","portIn":"3000","portOut":"4700","running":true,"uri":"https://api.jnqa.fun/api/containers/2","version":"v0.1.9"},{"commands":"--restart=always","description":"","image":"lilkir/weatherforecast","name":"weatherforecast","portIn":"3000","portOut":"4701","running":false,"uri":"https://api.jnqa.fun/api/containers/3","version":"latest"},{"commands":"--restart=always","description":"what is the weather today?","image":"lilkir/weatherforecast","name":"lk-weatherforecast","portIn":"3000","portOut":"4701","running":true,"uri":"https://api.jnqa.fun/api/containers/4","version":"v0.1.11"}]}
      return this._transformOutput(res2);
    };
  
    _transformOutput = (res) => {
      const ucFirst = (str) => {
        if (!str) return str;
          return str[0].toUpperCase() + str.slice(1);
      };
      console.log("SerCheck"+res)
      console.log("SerCheck c"+res["containers"][0]["name"])
      let textLine = ""
      res["containers"].forEach(function(element)
      {   
          console.log("E: " + element.name)
          console.log("R: " + element.running)
          if(element.running) {textLine = textLine+" ✔️"+element.name+"-"+element.version+" ▪️ "}
      });
      console.log("TEXT: "+textLine)
      return {
        output: textLine
      };
    };
  }
  
  export default CheckService;