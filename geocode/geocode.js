const request=require('request');


var geocodeAddress=(address)=>{
var encodedAddress=encodeURIComponent(address);
request({
	url:`http://www.mapquestapi.com/geocoding/v1/address?key=O035LhMZdOlRlAcWmrjbXEST1Y8Xi7o5&location=${encodedAddress}`,
	json:true
},(error,response,body)=>{
	if(error){
		callback('unable to connect to servers');
	}
	else if(body.status==='ZERO_ERROR'){
		callback('invalid address given');
	}
	else if(body.status===OK){
		callback(undefined,{
			address:body.results[0].locations[0].street,
			latitude:body.results[0].locations[0].latLng.lat,
			longitude:results[0].locations[0].latLng.lng
		});
		
		

		
});
}

module.exports.geocodeAddress=geocodeAddress;
	
//e0413e473c23b96c1d5b49780470d520