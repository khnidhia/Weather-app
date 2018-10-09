console.log('starting app');

setTimeout(()=>{
	console.log('inside the call back');

},2000);

setTimeout(()=>{
	console.log('no delay given');
},0000
)
console.log('closing app');
