var app = angular.module("Terminal",[]);
app.controller('MainCtrl', function($scope, $sce) {
	var files = {
		'abhinav': {
			'about_me.txt': "My name is Abhinav Havaldar. I am currently a student at NYU studying Math and Computer Science. I am from Bombay but currently live in New York.",
			'contact_me.txt': 'Cell Phone Number: <b>(917)-769-4595</b><br>Address: <b>80 Lafayette St. New York 10013</b>',
			'projects': {
				'baron_up.txt' : '<h2><a href="https://www.baronup.com">Baron Up</a></h2><p>Description: Developed website that provides statistical insights for League of Legends players using the Riot Games API<br>Built and launched beta version of toolkit app using Ruby on Rails with AngularJS and PostgreSQL<br>Currently iterating based on user feedback</p>',

				'parsely.txt' : '<h2><a href="https://github.com/Havaldar/parsely">Parsely</a></h2><p>Description: I created this command line tool for ReactJS users in Python and Ruby to track their component hierarchy. This is meant to be  developer tool that helps users with large quantities of react files to weed through components.</p>',

				'characterize.txt' : '<h2><a href="https://github.com/Havaldar/Characterize">Characterize</a></h2><p>Description: This is a command line tool that is aimed at helping people sort through images they have lost track off. It prints an ascii represntation of the image so users do not need to leave the terminal to see the image they are dealing with.</p>',

				'emoetion.txt' : '<h2><a href="">Emoetion</a></h2><p>Description: As an anime fan I have always wanted to know which anime are worth watching before anyone else. Therefore I made this classifier that uses reddit discussions to classify how good an anime is using a maximum entropy model that used myanimelist.com critiques as a training data set.</p>',

				'cowl.txt': '<h2><a href="">C.O.W.L.</a></h2><p>Description: Used the Marvel comics social graph to find communities of heroes by using the Louvain clustering method. Calculated the eigenvalue centrality in order to find the most influential heroes in each community.</p>',

				'geddit': '<h2><a href="">Geddit</a></h2><p>Description: A chrome extention that opens up every reddit article on a page in a preview mode such that you do not need to keep clicking and opening new tabs.</p>',

				'jakartascript': '<h2>Jakarta Script</h2><p>Description: A js interpreter made in scala, thatenforces a strongly typed version of node.js without dynamic typing etc. but permits more flexible arguement passing modes like passing by name, reference and variables.</p>'
			},
			'volunteer': {
				'makethon_of_kindness.txt': '<h2><a href="http://www.makerthonofkindness.org/">Makethon of Kindness (Organizer)</a></h2><p>Description: Developed website, advertised, and helped in basic logistics of hackerthon to encourage civic hacking for middle school children as part of the core team of organizers.</p>',

				'sneha.txt': '<h2><a href="http://www.snehamumbai.org/">Society for Nutrition, Education, and Health Action (SNEHA)</a></h2><p>Description: Analyzed donation trends across the past decade to identify and develop solution for increasing donor retention. Designed online database website using Ruby on Rails and PostgreSQL</p>',

				'facebook.txt': '<h2>Facebook (Techstart)</h2><p>Description: Taught weekly lessons on computer science to high schoolers to encourage greater involvement in tech.</p>',

				'gamejam.txt': '<h2><a href="http://gamejam.techatnyu.org">Gamejam (Organizer)</a></h2><p>organized a 100 person games hackerthon in New York city, sponsored by several large game companies.</p>'
			},
			'experience': {
				'kamcord.txt': '<h2><a href="https://www.kamcord.com/">Kamcord Backend Intern</a></h2><p>Description: Encoded live video streams using a Java backend and AWS. Worked with thumbnail builders to make web scrub bar for videos on demand. Developed a system for permissions, rate limiting, and securities reducing backend vulnerabilities.</p>',

				'microsoft.txt': '<h2>Microsoft Student Partner</h2><p>Hosted workshops, hackerthons, and demos on campus to evangelize Microsoft technologies.</p>',

				'ixperience.txt': '<h2><a href="http://ixperience.co.za/">IXperience Web Developer Intern</a></h2><p>Description: Assisted in developing alumni platform website and responsible for backend development of platform <br> Worked with Type Form API in order to improve how potential client data is stored</p>',

				'grader.txt' : '<h2>Grader, Introduction to Computer Science</h2><p>Description: Graded papers and analyzed homework projects as a grader for Computer Science 101.</p>',
				
			},
			'interests': {
				'anime_manga.txt': '<h2>Anime and Manga</h2><p>Description: I love watching anime and reading manga. In fact, I spent a summer in Japan studying animation techniques and Japanese Languag at the Yoyogi Animation Gakkuin. I plan on studying Japanese through college and hope I have the oppertunity to visit again.</p>',

				'football.txt': '<h2>Football</h2><p>Description: I enjoy playing and watchin football (soccer). Currently, I play intramural soccer and bach home I represented my highschool.</p>',

				'chocolate_milk.txt': '<h2>Chocolate Milk</h2><p>Descriptioin: As the name of this site implies, I really do love chocolate milk. I drink about 2 cups of hot chocolate a day and have written blog posts on the best chocolate milks from around New York City.</p>',

				'shaleila.txt': "<p>Lol don't bother</p>"
			}
		}
	};
	$scope.guest = "guest";
	$scope.commands = "";
	$scope.current_command = "";
	$scope.current_dir = $scope.files;
	var root_file = files;
	var history = [];
	var history_pointer = 0;
	$scope.terminal = true;
	$scope.simple = false;
	var keys = [];
	var audio = new Audio('music.mp3');
	var konami = [38,38,40,40,37,39,37,39,66,65];
	var path = [];

	const commands = {
		'cd': function(args) {
			var files_copy = files;
			var path_temp = path;
			if (args.length == 0) {
				path = [];
				files = root_file; return '';
			}
			const dests = args[0].split('/');
			for (var i = 0; i < dests.length; i++) {
				var dest = dests[i];
				if (dest === ".." || dest == '.') {
					if (dest === '..') path_temp.pop();
					files_copy = files_copy[dest];
				}
				else if (files_copy[dest] !== undefined) {
					path_temp.push(dest);
					const tmp = files_copy;
					files_copy = tmp[dest];
					files_copy['.'] = files_copy;
					files_copy['..'] = tmp;
				}
				else {
					return "" + dest + " is not a folder. <br />";
				}
			}
			path = path_temp;
			files = files_copy;
			return "";
		},
		'ls': function(args) {
			var temp = files;
			if (args.length != 0) {
				const dests = args[0].split('/');
				for (var i = 0; i < dests.length; i++) {
					var dest = dests[i];
		 			if (temp[dest] !== undefined) {
		 				temp = temp[dest];
		 			}
		 			else {
		 				return "Nope not a folder! <br />"
		 			}
				}
			}
			return Object.keys(temp).reduce(function(acc, curr_val, curr_i) {
				return acc + (curr_val[0] !== '.' ? curr_val + "&nbsp&nbsp&nbsp" : '');
			}, "") + "<br />";
		},
		'clear': function() {
			$scope.commands = ""
			return '';
		},
		'cat': function(args) {
			var temp = files;
			if (args.length != 0) {
				const dests = args[0].split('/');
				for (var i = 0; i < dests.length - 1; i++) {
					var dest = dests[i];
		 			if (temp[dest] !== undefined) {
		 				temp = temp[dest];
		 			}
		 			else {
		 				return "Nope not a folder! <br />"
		 			}
				}
				return temp[dests.pop()] + "<br />";
			}
			return "";
		},
		'pwd': function() {
			return path.reduce(function(acc, val, i) {
				return acc + '/' + val;
			}, '') + '<br />';
		}
	};

	$scope.switch = function() {
		$scope.simple = true;
		$scope.terminal = false;
	};

	$scope.autocomplete = function(e, current_command) {
		var keyCode = e["keyCode"];
		if (keyCode === 38) {
			history_pointer = history_pointer <= 0 ? 0 : history_pointer - 1;
			$scope.current_command = history[history_pointer];
		}
		if (keyCode === 40) {
			history_pointer = history_pointer >= history.length ? history.length : history_pointer + 1;
			$scope.current_command = history[history_pointer];
		}
		if(keyCode === 67 && e["ctrlKey"]) {
			audio.pause();
			audio.currentTime = 0;
		}
		if(keys.length >= 10) {
			keys.splice(0, 1);
		}
		all = true;
		keys.push(keyCode);
		for(var i = 0; i < keys.length; i++) {
			if(konami[i] !== keys[i]) {
				all = false;
			}
		}
		if (keys.length !== 10) {
			all = false;
		}
		if (all) {
			audio.play();
			$scope.commands += "<br><img src='ascii-1060.gif' width='700px' autocofocus/><br>"
		}
		if (keyCode == 9) {
			e.preventDefault();
			const path = $scope.current_command.trim().split(' ').pop();
			const del_path = path.split('/');
			const term = del_path[del_path.length - 1];
			var temp = files;
			for (var i = 0; i < del_path.length - 1; i++) {
				if (temp[del_path[i]] === undefined) break;
				else temp = temp[del_path[i]];
			}
			const f = Object.keys(temp);
			if (term.length > 0) {
				const possible = f.reduce(function(acc, val, i) {
					if (val.length > term.length && val.substring(0, term.length) === term) {
						acc.push(val.substring(term.length, val.length));
					}
					return acc;
				}, []);
				if (possible.length === 1) $scope.current_command += possible[0];
			}
		}
	};

	$scope.enter_command = function(command) {
		history.push(command);
		history_pointer = history.length;
		$scope.commands += $scope.guest + " >> " + command + "<br />";
		$scope.current_command = "";
		const comms = command.split("&&");
		comms.forEach(function(comm) {
			const del_comm = comm.trim().replace(/  +/g, ' ').split(' ');
			const message = commands[del_comm[0]](del_comm.slice(1));
			$scope.commands += message;
		});
	};
	$scope.trust = $sce.trustAsHtml;
});
