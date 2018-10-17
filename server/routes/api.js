const express = require('express');
const fs = require('fs');
const uuidv4 = require('uuid/v4');

const router = express.Router();

router.post('/register',(req, res)=>{
	
	let data = JSON.stringify(req.body)
	var filename = req.body.username + uuidv4();
	fs.writeFile('Document/'+filename+'.json', data, (err) => {  
		if (err) throw err;
		res.status(200).send('Data written to file');
	});


});


module.exports = router; 





