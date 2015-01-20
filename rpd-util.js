/*
"rpd-util"
Personal Utilities Libary
Language: JavaScript
Author: Richard Price <rich@richardprice.com>

For author's reference:
http://www.w3schools.com/js/js_function_parameters.asp

*/

// JResig like 'log' function
function log(target, debug){ 

	// NEED TO ADD VARIABLE TRAVERSING HERE!!!
	// WHAT if it's null too??

	var target = target + '\n';

	var res = document.write(target);

	if (debug === true) {
		console.log(target);
	}

	return res;

} 

// JResig like 'error' function
function error(target, debug){ 

	var target = target + '\n';

	var res = document.write(target);

	if (debug === true) {
		console.log(target);
	}

	return res;

} 


