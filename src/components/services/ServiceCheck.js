import { env } from "./base/env"

class CheckService {
    getResourse = async (url) => {
      var username = env.REACT_APP_JF_USERNAME;
      var password = env.REACT_APP_JF_PASSWORD;
      const otherParams={
        method: 'get', 
        headers: new Headers({
          'Authorization': 'Basic '+btoa(username+":"+password)
        }) 
      }
      fetch(theUrl, otherParams)
      .then(data=>{return data.json()})
      .then(res=>{console.log(res)})
    };
    
    getServices = async () => {
      let res = await this.getResourse(`https://${env.REACT_APP_JF_API_HOST}/api/containers`);
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
