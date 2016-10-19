var files = {
	'abhinav': {
		'kenny': {
			'algo': {

			}
		}
	}
}
const cd = function(dest) {
	if (dest === ".." || dest == '.') {
		files = files[dest];
		return true;
	}
	else if (files[dest] !== undefined) {
		const tmp = files;
		files = tmp[dest];
		files['.'] = files;
		files['..'] = tmp;
		return true;
	}
	return false;
}

var pwd = function() {
	var path = [];
	var tmp = files;
	while (tmp['..'] != undefined)	{
		path.unshift(tmp['.name'])
		tmp = tmp['..'];
	}
	return path;
}

arr = ['abhinav', 'kenny', 'algo', '..', '..', '..'];
console.log(files);
for (var i = 0; i < 6; i++) {
	console.log(cd(arr[i]));
	console.log(files);
}