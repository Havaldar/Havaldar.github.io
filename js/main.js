var app = angular.module("Terminal",[]);
app.controller('MainCtrl', function($scope, $sce) {
	$scope.commands = "";
	$scope.current_command = "";
	$scope.path = [];
	$scope.files = {
		'.is_root': true,
		'.is_dir': true,
		'abhinav': {	
			'.is_dir': true,
			'projects.dir': {
				'.is_dir': true,
				'Baron_Up.file' : {'title': 'Baron_Up', 'dexcription': '', 'url': "<a href='www.baronup.com'>www.baronup.com</a>"},
				'Makethon_of_Kindness.file' : {'title': 'Makethon_of_Kindness', 'dexcription': '', 'url': "<a href='www.baronup.com'>www.baronup.com</a>"},
				'Parsely.file' : {'title': 'Parsely', 'dexcription': '', 'url': "<a href='www.baronup.com'>www.baronup.com</a>"},
				'ASCIIng.file' : {'title': 'ASCIIng', 'dexcription': '', 'url': "<a href='www.baronup.com'>www.baronup.com</a>"}
			},
			'about_me.txt': "My name is Abhinav Havaldar. I am currently a student at NYU studying Math and Computer Science. I am from Bombay but currently live in New York.",
			'contact_me.txt': 'Cell Phone Number: <b>(917)-769-4595</b><br>Address: <b>80 Lafayette St. New York 10013</b>',
			'interests.dir': {
				'.is_dir': true,
				'anime_manga.file': "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_____<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp\\<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspvvvvvvv&nbsp&nbsp\/|__\/|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspI&nbsp&nbsp&nbsp\/O,O&nbsp&nbsp&nbsp|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspI&nbsp\/_____&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/|\/|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspJ|\/^&nbsp^&nbsp^&nbsp\\&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp\/00&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp_\/\/|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|^&nbsp^&nbsp^&nbsp^&nbsp|W|&nbsp&nbsp&nbsp|\/^^\\&nbsp|&nbsp&nbsp&nbsp\/oo&nbsp|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\m___m__|_|&nbsp&nbsp&nbsp&nbsp\\m_m_|&nbsp&nbsp&nbsp\\mm_|",
				'football.file': '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_...----.._<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,:\':::::.&nbsp&nbsp&nbsp&nbsp&nbsp`>.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,\'&nbsp|:::::;\'&nbsp&nbsp&nbsp&nbsp&nbsp|:::.<br>&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp`\'::\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:::::\\<br>&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_____&nbsp&nbsp&nbsp&nbsp&nbsp`::;\\<br>&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/:::::\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`&nbsp&nbsp:<br>&nbsp&nbsp&nbsp|&nbsp,.&nbsp&nbsp&nbsp&nbsp&nbsp\/:::::::\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp|;:::.&nbsp&nbsp&nbsp`::::::;\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp::::::&nbsp&nbsp&nbsp&nbsp&nbsp`::;\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,.&nbsp&nbsp;<br>&nbsp&nbsp&nbsp&nbsp\\:::\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,::::\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\:::\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`.&nbsp&nbsp&nbsp&nbsp&nbsp,:.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:;\'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`-.::::::..&nbsp&nbsp_.\'\'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp```----\'\'\'',
				'chocolate_milk.file': '&nbsp&nbsp&nbsp_________<br>&nbsp&nbsp|&nbsp_______&nbsp|<br>&nbsp\/&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\<br>\/___\\_________\\<br>|&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbspM&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|\\&nbsp&nbspI&nbsp&nbsp\\&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp\\&nbsp&nbspL&nbsp&nbsp\\|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbspK&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp|<br>|___|_______\\_|',
				'video_games.file': "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+.-\'_____\'-.---------------------------.-\'_____\'-.+<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspA&nbspB&nbspH&nbspI&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp.\'&nbsp&nbsp|&nbsp&nbsp_&nbsp&nbsp|&nbsp&nbsp&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/|\\&nbsp|___&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/_\\&nbsp|___&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp;&nbsp&nbsp__&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp;&nbsp|&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|&nbsp<---&nbsp&nbsp&nbsp--->&nbsp|&nbsp|&nbsp|__|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|_:>&nbsp|&nbsp||_|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(_)|&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|___&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp___|&nbsp;SELECT&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSTART&nbsp;&nbsp|___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp___|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|\\&nbsp&nbsp&nbsp&nbsp|&nbsp\\|\/&nbsp|&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp|&nbsp(X)&nbsp|&nbsp&nbsp&nbsp&nbsp\/|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp|_____|&nbsp&nbsp.\',\'\"&nbsp\"\',&nbsp|___|&nbsp&nbsp,\'\"&nbsp\"\',&nbsp\'.&nbsp&nbsp|_____|&nbsp&nbsp.\'&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'-.______.-\'&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\ANALOG\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp\'-._____.-\'&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|------|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp\'.___.\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\'.___.\'&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\________\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\_________\/"
			}
		}
	};
	$scope.current_dir = $scope.files;
	$scope.name = "guest";
	$scope.enter_command = function(command) {
		$scope.commands += "guest >> " + command + "<br />";
		$scope.current_command = "";
		if (command === "clear") {
			$scope.commands = "";
		} else if (command === "ls") {
			for (var key in $scope.current_dir) {
				if (key.substring(0,1) != '.') {
					$scope.commands += key + "&nbsp&nbsp&nbsp&nbsp";
				}
			}
			$scope.commands += "<br />"
		} else if (command.trim() === "cd") {
			$scope.current_dir = $scope.files;
			$scope.path = [];
		} else if (command.substring(0,3) === "cd ") {
			if ($scope.current_dir[command.substring(3).trim()] != undefined && $scope.current_dir[command.substring(3).trim()]['.is_dir']) {
				$scope.current_dir = $scope.current_dir[command.substring(3).trim()];
				$scope.path.push(command.substring(3).trim());
			} else {
				var matches = command.match(/\.{2}/g);
				if (matches.length > 0) {
					$scope.current_dir = $scope.files;
					for(var i = 0; i < ($scope.path.length-matches.length);i++) {
						$scope.current_dir = $scope.current_dir[$scope.path[i]];
					}
					for(var i = $scope.path.length-1; i >= ($scope.path.length-matches.length);i--) {
						$scope.path.pop();
					}
				} else {
					$scope.commands += "Sorry thats not a directory<br />";
				}
			}
		} else if (command.substring(0,4).trim() === "cat") {
			$scope.commands += $scope.current_dir[command.substring(3).trim()] + "<br />";
		} else if (command.trim().substring(0,3) === "pwd") {
			if ($scope.path.length === 0) {
				$scope.commands += 'root<br>'
			} else {
				for(var i = 0; i < $scope.path.length; i++) {
					$scope.commands += "/" + $scope.path[i];
				}
				$scope.commands += "<br>";
			}
		} else if (command == "") {

		} else {
			$scope.commands += "<p style=\"color:#ff0033;margin:0;\">OK so I made this during my OS class it's not actually a terminal. Just use basic linux commands (NO FLAGS I have a life)</p>";
		}
	};
	$scope.trust = $sce.trustAsHtml;
});