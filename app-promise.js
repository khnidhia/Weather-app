const axios=require('axios');
const yargs=require('yargs');
const argv=yargs.options({
	a:{

		demand:true,
		alias:'address',
		describe:"address to take weather for",
		string:true
	}
	})
	.help()
	.alias('help','h')
	.argv;

var encodedAddress=encodeURIComponent(address);
var geocodeUrl=`http://www.mapquestapi.com/geocoding/v1/address?key=O035LhMZdOlRlAcWmrjbXEST1Y8Xi7o5&location=${encodedAddress}`;

axios.get(geocodeUrl).then(response)=>{
	if(response.data.status==='ZERO_RESULTS');{
		throw new Error('Unable to find that address');
	}
	var lat=
	var lng=response.data.
	
	console.log(response.data);
}).catch.(e)=>{
	if(e.code==='ENOTFOUND'){
		console.log('unable to connect to api servers');
	}else{
		console.log(e.message);
	console.log(e);
}
