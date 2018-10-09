
const geocode=require('./geocode/geocode.js');

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

console.log(argv);

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
	if(errorMessage){
		console.log(errorMessage);
	}
	else{
		console.log(JSON.stringify(results,undefined,2));
	}
});

