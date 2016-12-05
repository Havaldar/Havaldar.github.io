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

				'geddit.txt': '<h2><a href="">Geddit</a></h2><p>Description: A chrome extention that opens up every reddit article on a page in a preview mode such that you do not need to keep clicking and opening new tabs.</p>',

				'jakartascript.txt': '<h2>Jakarta Script</h2><p>Description: A js interpreter made in scala, thatenforces a strongly typed version of node.js without dynamic typing etc. but permits more flexible arguement passing modes like passing by name, reference and variables.</p>'
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
	var err = new Audio('err.mp3');
	var na = new Audio('na.mp3');
	var konami = [38,38,40,40,37,39,37,39,66,65];
	var path = [];
    const removeEmpty = function(arr) { return arr.reduce(function(acc, val, i) { return val ? acc.concat(val) : acc }, []) };

	const commands = {
		'cd': function(args) {
			var files_copy = files;
			var path_temp = path;
			if (args.length == 0) {
				path = [];
				files = root_file; return '';
			}
			const dests = removeEmpty(args[0].trim().split('/'));
			for (var i = 0; i < dests.length; i++) {
				var dest = dests[i];
                if (files_copy[dest] === undefined) return "" + dest + " is not a folder. <br>";
				else if (files_copy[dest] !== undefined  && (dest === ".." || dest === '.' || dest === '~')) {
					if (dest === '..') path_temp.pop();
                    if (dest === '~') path_temp.splice(0, path_temp.length);
					files_copy = files_copy[dest];
				}
				else if (files_copy[dest] !== undefined && typeof files_copy[dest] === 'object') {
					path_temp.push(dest);
					const tmp = files_copy;
					files_copy = tmp[dest];
					files_copy['.'] = files_copy;
					files_copy['..'] = tmp;
                    files_copy['~'] = root_file;
				}
                else {
                    return "" + dest + " is not a folder. <br>"
                }
			}
			path = path_temp;
			files = files_copy;
			return "";
		},
		'ls': function(args) {
			var temp = files;
			if (args.length != 0) {
				const dests = removeEmpty(args[0].trim().split('/'));
				for (var i = 0; i < dests.length; i++) {
					var dest = dests[i];
		 			if (temp[dest] !== undefined && typeof temp[dest] === 'object') {
		 				temp = temp[dest];
		 			}
		 			else {
		 				return "Nope not a folder! <br />"
		 			}
				}
			}
			return Object.keys(temp).reduce(function(acc, curr_val, curr_i) {
				if (curr_val[0] === '.' || curr_val === '~') return acc;
				else if (typeof temp[curr_val] === 'object') return acc + curr_val + "/&nbsp&nbsp&nbsp";
				else return acc + curr_val + "&nbsp&nbsp&nbsp";
			}, "") + "<br />";
		},
		'clear': function() {
			$scope.commands = ""
			return '';
		},
		'cat': function(args) {
			var buffer = "";
			return args.reduce(function(acc, val, i) {
				const dests = val.split('/');
				var temp = files;
				for (var i = 0; i < dests.length - 1; i++) {
					var dest = dests[i];
		 			if (temp[dest] !== undefined) {
		 				temp = temp[dest];
		 			}
		 			else {
		 				return acc + dest + " is not a folder! <br />"
		 			}
				}
				const file_name = dests.pop();
				if (temp[file_name] === undefined) return acc + file_name + " doesn't exist sorry! <br />";
				else if (typeof temp[file_name] === 'string') return acc + temp[file_name] + "<br><br><br>";
				else return acc + file_name + " is not a file! <br />";
			}, "");
		},
		'pwd': function() {
			return path.reduce(function(acc, val, i) {
				return acc + '/' + val;
			}, '') + '<br />';
		},
		'vim': function() {
			err.play();
			return 'Yea I feel your pain as a fellow vim guy.<br />';
		},
		'vi': function() {
			err.play();
			return 'Yea I feel your pain as a fellow vim guy.<br />';
		},
		'emacs': function() {
			return 'For all you emacs users out there<br><iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0" frameborder="0"></iframe><br>';
		},
		'nano': function() {
			return 'Why would you use nano<br><img src="https://media.giphy.com/media/w6MNHOoLEzBVm/giphy.gif" style="filter: grayscale(100%);"><br>';
		},
		'whoami': function() {
			return "Good question. You think you are " + $scope.guest + ", but who really knows.<br>";
		},
		'help': function() {
			return "<br><p>cd [folder_name] : change directories to a folder. This will not work if a file is given as an arguement.<br>cd .. : go up a level in terms of directories.<br>cd : go to the root directory.<br>ls : show all files and folders in current directory.<br>pwd : show the path to the current working directory.<br>cat [filenames delimited by spaces]: prints out the contents of a file. Please only use this with text files.<br>clear : will clear the console of previous commands.<br>vim or vi : use vim or vi text editors<br>nano : use nano text editor<br>emacs : use emacs text editor<br>&lt up &gt and &lt down &gt : go up and down ur bash history<br>&lt tab &gt : autocomplete file or folder name<br>[command] & [command] : chains commands one after another<br></p>";
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
			$scope.commands += "<br><img class='gif' src='ascii-1060.gif' width='700px' autocofocus/><br>"
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
		const all_comms = Object.keys(commands);
		comms.forEach(function(comm) {
			const del_comm = comm.trim().replace(/  +/g, ' ').split(' ');
			var message = "";
			if (all_comms.indexOf(del_comm[0]) < 0) {
				message = "<p style=\"color:#ff0033;margin:0;\">OK so I made this during my OS class it's not actually a terminal. Just use basic linux commands (NO FLAGS I have a life)</p>";
			}
			else {
				message = commands[del_comm[0]](del_comm.slice(1));
			}
			$scope.commands += message;
		});
	};

	$scope.trust = $sce.trustAsHtml;
});
