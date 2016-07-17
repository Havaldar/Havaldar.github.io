angular
	.module('Terminal')
	.factory('terminalService', function() {

		return {
			executeTerminalCommand: function(guest, prevCommands, currentCommand, command, currentDir, path, files) {

				// Print Command and erase last command
				commands += guest + " >> " + command + "<br />";
				currentCommand = "";
				var parsedCommand = command.trim();

				// find command 
				switch (parsedCommand) {
					case "clear":
						commands = "";
					case "ls":
						for (var key in currentDir) {
							if (key.substring(0,1) != '.') {
								commands += key + "&nbsp&nbsp&nbsp";
							}
						}
						commands += "<br />";

					case "cd":
						currentDir = files;
						path = [];
					case "pwd":
						if (path.length === 0) {
							commands += 'root<br>'
						} else {
							for(var i = 0; i < path.length; i++) {
								commands += "/" + path[i];
							}
							commands += "<br>";
						}
				}

				// execute commands with arguements
				var tokenizedCommand = parsedCommand.split(" ");
				switch (tokenizedCommand[0]) {
					case "open":
						var file = tokenizedCommand[1];
						commands += '<br><div class="col-md-6">' + currentDir[file]['img'] + '</div>';
						commands += '<div class="col-md-6"><a target="_blank" href=\"'+currentDir[file]['url']+'\">'+currentDir[file]['title']+'</a>'+'<br>'+ currentDir[file]['description'] + '</div><br><br>';
						
					case "cd":
						var arr = command.substring(3).trim().split('/');
						for (var i = 0; i < arr.length; i++) {
							if (currentDir[arr[i].trim()] != undefined && currentDir[arr[i].trim()]['.is_dir']) {
								currentDir = $scope.current_dir[arr[i].trim()];
								path.push(arr[i].trim());
							} else {
								var matches = command.match(/\.{2}/g);
								if (matches.length > 0) {
									currentDir = files;
									for(var i = 0; i < (path.length-matches.length);i++) {
										currentDir = currentDir[path[i]];
									}
									for(var i = path.length-1; i >= (path.length-matches.length);i--) {
										path.pop();
									}
								} else {
									commands += "Sorry thats not a directory<br />";
								}
							}
						}	
					}	

			},

		}
	});