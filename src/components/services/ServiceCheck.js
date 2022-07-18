import { env } from "./base/env"

class CheckService {
    _apiBase = `https://${env.JF_API_HOST}/api/`;
    _apiKey = "no";
    getResourse = async (url) => {
      let res = await fetch(url);
  
      var username = env.JF_USERNAME;
      var password = env.JF_PASSWORD;
      var host = env.JF_API_HOST;
      var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
      var header = {'Host': `${host}`, 'Authorization': auth};
      var request = this.request('GET', '/', header);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }
  
      return await res.json();
    };
    
    getServices = async (name) => {
      console.log("ss")


      // console.log(request)
      const res = await this.getResourse(
        `${this._apiBase}containers`
      );
      return this._transformOutput(res);
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