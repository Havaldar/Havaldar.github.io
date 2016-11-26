var files = {
	'abhinav': {
		'kenny': {
			'algo': {

			}
		}
	}
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