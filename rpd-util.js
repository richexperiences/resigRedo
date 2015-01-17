/*
"rpd-util"
Personal Utilities Libary
Language: JavaScript
Author: Richard Price <rich@richardprice.com>

For author's reference:
http://www.w3schools.com/js/js_function_parameters.asp

*/

function log(target, debug){ 

	var res = document.write(target);

	if (debug === true) {
		console.log(target);
	}

	return res;
} 
