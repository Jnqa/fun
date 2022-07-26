import { env } from "./base/env"

class CheckService {
    getResourse = async (theUrl) => {
      var username = env.REACT_APP_JF_USERNAME;
      var password = env.REACT_APP_JF_PASSWORD;
      const otherParams={
        method: 'get', 
        headers: new Headers({
          'Authorization': 'Basic '+btoa(username+':'+password)
        }) 
      }
      let response = await fetch(theUrl, otherParams)
      if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
      } else {
        return await response.json()
      }
      // return res.text();
      // return text.json();
    };
    
    getServices = async () => {
      let res = await this.getResourse(`https://${env.REACT_APP_JF_API_HOST}/api/containers`);
      console.log(`RES -- : ${res}`)
      return this._transformOutput(res)
    };
  
    _transformOutput = (res) => {
      const ucFirst = (str) => {
        if (!str) return str;
          return str[0].toUpperCase() + str.slice(1);
      };
      let output = []
      res["containers"].forEach(function(element)
      {   
          if(element.running) {output.push({"name":`${element.name}`,"version":`${element.version}`})}
      });
      return {
        outputDict: output
      };
    };
  }
  
  export default CheckService;
