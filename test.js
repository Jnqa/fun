console.log("test")


function httpGetAsync(theUrl, callback)
{
    var username = "bot" //process.REACT_APP_JF_USERNAME;
    var password = "botl0g1n4ndrules" //process.REACT_APP_JF_PASSWORD;
    var host = "api.jnqa.fun" // env.REACT_APP_JF_API_HOST;
    var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    var header = {'Host': `${host}`, 'Authorization': `${auth}`};
    var xmlHttp = new XMLHttpRequest();
    var request = xmlHttp.open('GET', theUrl, header);
    console.log(`req: ${request.toString()}`)
}

function fetcher(theUrl)
{
    var username = "bot" //process.REACT_APP_JF_USERNAME;
    var password = "botl0g1n4ndrules" //process.REACT_APP_JF_PASSWORD;
    const otherParams={
        method: 'get', 
        headers: new Headers({
            'Authorization': 'Basic '+btoa(username+":"+password)
            // 'Content-Type': 'application/x-www-form-urlencoded'
        }) 
        // body: 'A=1&B=2'
    }
    fetch(theUrl, otherParams)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
}
let res = fetcher(`https://api.jnqa.fun/api/containers`)

// let res = httpGetAsync(`https://api.jnqa.fun/api/containers`);
