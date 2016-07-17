var app = angular.module("Terminal",[]);
// app.controller('MainCtrl', function($scope, $sce) {
// 	$scope.terminal = true;
// 	$scope.simple = false;
// 	$scope.switch = function() {
// 		$scope.simple = true;
// 		$scope.terminal = false;
// 	};
// 	var possible_commands = [
// 		"clear",
// 		"ls",
// 		"cd",
// 		"open",
// 		"cat",
// 		"pwd"
// 	];
// 	keys = [];
// 	audio = new Audio('music.mp3');
// 	audio1 = new Audio('music1.mp3');
// 	konami = [38,38,40,40,37,39,37,39,66,65];
// 	$scope.autocomplete = function(e, current_command) {
// 		var keyCode = e["keyCode"]; 
// 		if(keyCode === 67 && e["ctrlKey"]) {
// 			audio.pause();
// 			audio.currentTime = 0;
// 			audio1.pause();
// 			audio1.currentTime = 0;
// 		}
// 		if(keys.length >= 10) {
// 			keys.splice(0, 1);
// 		}
// 		all = true;
// 		keys.push(keyCode);
// 		for(var i = 0; i < keys.length; i++) {
// 			if(konami[i] !== keys[i]) {
// 				all = false;
// 			}
// 		}
// 		if (keys.length !== 10) {
// 			all = false;
// 		}
// 		if (all) {
// 			audio.play();
// 			$scope.commands += "<br><img src='ascii-1060.gif' width='700px' autocofocus/><br>"
// 		}
// 		if (keyCode == 9) {
// 			e.preventDefault();
// 			var searchterms = current_command.trim().split(" ",2);
// 			if(searchterms[0] !== "") {
// 				if(searchterms.length > 1) {
// 					var files = Object.keys($scope.current_dir);
// 					var result = [];
// 					for (var i = 0; i < files.length; i++) {
// 						if (searchterms[1].slice(0,files[i].length-1) === searchterms[1])
// 							result.push(files[i]);
// 					}
// 					if (result.length === 1) {
// 						console.log(result[0]);
// 					}
// 				}
// 				else {
// 					console.log(1)
// 					var result = [];

// 					for(var i in possible_commands) {
// 						if(possible_commands[i].slice(0, searchterms[0].length) === searchterms[0]) 
// 							result.push(possible_commands[i]);
// 					}	
// 					if(result.length === 1) {
// 						$scope.current_command = result[0];
// 					}
// 				}
// 			}
// 		}
// 	};
// 	$scope.guest = "guest";
// 	$scope.commands = "";
// 	$scope.current_command = "";
// 	$scope.path = [];
// 	$scope.files = {
// 		'.is_root': true,
// 		'.is_dir': true,
// 		'abhinav': {	
// 			'.is_dir': true,
// 			'about_me.txt': "My name is Abhinav Havaldar. I am currently a student at NYU studying Math and Computer Science. I am from Bombay but currently live in New York.",
// 			'contact_me.txt': 'Cell Phone Number: <b>(917)-769-4595</b><br>Address: <b>80 Lafayette St. New York 10013</b>',
// 			'projects.dir': {
// 				'.is_dir': true,
// 				'baron_up.file' : {
// 					'title': 'Baron Up', 
// 					'img': '&nbsp;&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;__<br>&nbsp;&nbsp;&nbsp;\/&nbsp;__&nbsp;)____&nbsp;__________&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/&nbsp;\/&nbsp;\/&nbsp;\/___<br>&nbsp;&nbsp;\/&nbsp;__&nbsp;&nbsp;\/&nbsp;__&nbsp;`\/&nbsp;___\/&nbsp;__&nbsp;\\\/&nbsp;__&nbsp;\\&nbsp;&nbsp;&nbsp;\/&nbsp;\/&nbsp;\/&nbsp;\/&nbsp;__&nbsp;\\<br>&nbsp;\/&nbsp;\/_\/&nbsp;\/&nbsp;\/_\/&nbsp;\/&nbsp;\/&nbsp;&nbsp;\/&nbsp;\/_\/&nbsp;\/&nbsp;\/&nbsp;\/&nbsp;\/&nbsp;&nbsp;\/&nbsp;\/_\/&nbsp;\/&nbsp;\/_\/&nbsp;\/<br>\/_____\/\\__,_\/_\/&nbsp;&nbsp;&nbsp;\\____\/_\/&nbsp;\/_\/&nbsp;&nbsp;&nbsp;\\____\/&nbsp;.___\/&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/_\/<br>&nbsp;&nbsp;&nbsp;&nbsp;',
// 					'description': 'Developed website that provides statistical insights for League of Legends players using the Riot Games API<br>Built and launched beta version of toolkit app using Ruby on Rails with AngularJS and PostgreSQL<br>Currently iterating based on user feedback', 
// 					'url': "https://www.baronup.com"
// 				},
// 				'parsely.file' : {
// 					'title': 'Parsely',
// 					'img': '&nbsp;&nbsp;&nbsp;|<br>&nbsp;.\'|\'.<br>\/.\'|\\&nbsp;\\<br>|&nbsp;\/|\'.|<br>&nbsp;\\&nbsp;|\\\/<br>&nbsp;&nbsp;\\|\/<br>&nbsp;&nbsp;&nbsp;`\'&nbsp;<br>',
// 					'description': 'I created this command line tool for ReactJS users in Python and Ruby to track their component hierarchy. This is meant to be  developer tool that helps users with large quantities of react files to weed through components.', 
// 					'url': "https://github.com/Havaldar/parsely"
// 				},
// 				'characterize.file' : {
// 					'title': 'Characterize', 
// 					'description': 'This is a command line tool that is aimed at helping people sort through images they have lost track off. It prints an ascii represntation of the image so users do not need to leave the terminal to see the image they are dealing with.', 
// 					'url': "https://github.com/Havaldar/Characterize",
// 					'img': "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o8%8888,&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o88%8888888.&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8\'-&nbsp;&nbsp;&nbsp;&nbsp;-:8888b&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8888&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;d8.-=.&nbsp;,==-.:888b&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;>8&nbsp;`~`&nbsp;:`~\'&nbsp;d8888&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,88888&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88b.&nbsp;`-~&nbsp;&nbsp;\':88888&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;888b&nbsp;~==~&nbsp;.:88888&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;88888o--:\':::8888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;`88888|&nbsp;:::\'&nbsp;8888b&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;8888^^\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8888b&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;d888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,%888b.&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;d88%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%%%8--\'-.&nbsp;&nbsp;<br>&nbsp;/88:.__&nbsp;,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_%-\'&nbsp;---&nbsp;&nbsp;-&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\'\'\'::===..-\'&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;--.&nbsp;&nbsp;`<br>"
// 				}
// 			},
// 			'volunteer.dir': {
// 				'.is_dir': true,
// 				'makethon_of_kindness.file' : {
// 					'title': 'Makethon of Kindness', 
// 					'img': "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.-.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.-\"`&nbsp;.`'.&nbsp;&nbsp;&nbsp;&nbsp;\/\\\\|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_(\\-\/)_\"&nbsp;,&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;,\\&nbsp;&nbsp;\/\\\\\\\/<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(#b^d#)}&nbsp;.&nbsp;&nbsp;&nbsp;.\/,&nbsp;&nbsp;|\/\\\\\\\/<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`-.(Y).-`&nbsp;&nbsp;,&nbsp;&nbsp;|&nbsp;&nbsp;,&nbsp;|\\.-`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/~\/,_\/~~~\\,__.-`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\/\/\/\/~&nbsp;&nbsp;&nbsp;&nbsp;\/\/&nbsp;~\\\<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;==`==`&nbsp;&nbsp;&nbsp;==`&nbsp;&nbsp;&nbsp;==`<br>",
// 					'description': 'Developed website, advertised, and helped in basic logistics of hackerthon to encourage civic hacking for middle school children as part of the core team of organizers ', 
// 					'url': "http://www.makerthonofkindness.org/"
// 				},
// 				'sneha.file' : {
// 					'title': 'Society for Nutrition, Education, and Health Action (SNEHA)', 
// 					'description': 'Analyzed donation trends across the past decade to identify and develop solution for increasing donor retention <br> Designed online database website using Ruby on Rails and PostgreSQL', 
// 					'url': "http://www.snehamumbai.org/"
// 				}
// 			},
// 			'experience.dir': {
// 				'ixperience.file' : {
// 					'title': 'IXperience Web Developer Intern', 
// 					'description': 'Assisted in developing alumni platform website and responsible for backend development of platform <br> Worked with Type Form API in order to improve how potential client data is stored', 
// 					'url': "http://ixperience.co.za/",
// 					'img': '-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;_..::__:&nbsp;&nbsp;,-"-"._&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_,.__<br>&nbsp;&nbsp;&nbsp;_.___&nbsp;_&nbsp;_<_>`!(._`.`-.&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_._&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`_&nbsp;,_/&nbsp;&nbsp;\'&nbsp;&nbsp;\'-._.---.-.__<br>>.{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&nbsp;"&nbsp;`-==,\',._\\{&nbsp;&nbsp;\\&nbsp;&nbsp;/&nbsp;{)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;_&nbsp;">_,-\'&nbsp;`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mt-2_<br>&nbsp;&nbsp;\\_.:--.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`._&nbsp;)`^-.&nbsp;"\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,&nbsp;[_/(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__,/-\'<br>&nbsp;\'"\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&nbsp;&nbsp;&nbsp;&nbsp;_L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oD_,--\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/.&nbsp;(|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_)_.\\\\._<>&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_,\'&nbsp;/&nbsp;&nbsp;\'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[_/_\'`&nbsp;`"(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<\'}&nbsp;&nbsp;)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\\\&nbsp;&nbsp;&nbsp;&nbsp;.-.&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;`-\'"..\'&nbsp;`:.#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_)&nbsp;&nbsp;\'<br>&nbsp;&nbsp;&nbsp;&nbsp;`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;(&nbsp;&nbsp;`(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`:\\&nbsp;&nbsp;>&nbsp;\\&nbsp;&nbsp;,-^.&nbsp;&nbsp;/\'&nbsp;\'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`._,&nbsp;&nbsp;&nbsp;""&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\`\'&nbsp;&nbsp;&nbsp;\\|&nbsp;&nbsp;&nbsp;?_)&nbsp;&nbsp;{\\<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`=.---.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`._._&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"`&nbsp;&nbsp;|\'&nbsp;,-&nbsp;\'.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;`-._&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`:`<_|h--._<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`=.__.`-\'\\<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|{|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,-.,\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;,\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;/&nbsp;`\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;/&nbsp;Cape&nbsp;Town-->iX_\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;__&nbsp;&nbsp;/<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\'-\'&nbsp;&nbsp;`-\'&nbsp;&nbsp;&nbsp;\\.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&nbsp;&nbsp;&nbsp;&nbsp;/<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\'<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______._.--._&nbsp;_..---.---------._<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,-----"-..?----_/&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__,-\'"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<br>-.._(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`-----\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`-<br>-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----<br>'
// 				},
// 				'grader.file' : {
// 					'title': 'Grader, Introduction to Computer Science', 
// 					'description': 'Graded papers and analyzed homework projects as a grader for Computer Science 101.', 
// 					'url': "",
// 					'img': "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/\\/&nbsp;|/\\<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;^&nbsp;&nbsp;&nbsp;|&nbsp;/\\&nbsp;&nbsp;/\\<br>&nbsp;&nbsp;(\\/\\&nbsp;&nbsp;/&nbsp;^&nbsp;&nbsp;&nbsp;/\\/&nbsp;&nbsp;)/^&nbsp;)<br>&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;\\/^&nbsp;/\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;/<br>&nbsp;&nbsp;&nbsp;&nbsp;)^&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<br>&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^\\&nbsp;&nbsp;)<br>&nbsp;&nbsp;&nbsp;&nbsp;\\___\\/____/______/<br>&nbsp;&nbsp;&nbsp;&nbsp;[________________]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//\\\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<<()>>&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N.Y.U.&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\____________/<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br>"
// 				},
// 				'.is_dir': true
// 			},
// 			'interests.dir': {
// 				'.is_dir': true,
// 				'anime_manga.file': {
// 					'title': 'Anime and Manga',
// 					'img':"&nbsp_____<br />\/&nbsp&nbsp&nbsp&nbsp&nbsp\\<br />vvvvvvv&nbsp&nbsp\/|__\/|<br />&nbsp&nbsp&nbspI&nbsp&nbsp&nbsp\/O,O&nbsp&nbsp&nbsp|<br />&nbsp&nbspI&nbsp\/_____&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/|\/|<br />&nbsp&nbspJ|\/^&nbsp^&nbsp^&nbsp\\&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp\/00&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp_\/\/|<br />&nbsp&nbsp&nbsp|^&nbsp^&nbsp^&nbsp^&nbsp|W|&nbsp&nbsp&nbsp|\/^^\\&nbsp|&nbsp&nbsp&nbsp\/oo&nbsp|<br />&nbsp&nbsp&nbsp&nbsp\\m___m__|_|&nbsp&nbsp&nbsp&nbsp\\m_m_|&nbsp&nbsp&nbsp\\mm_|",
// 					'description': 'I love watching anime and reading manga. In fact, I spent a summer in Japan studying animation techniques and Japanese Languag at the Yoyogi Animation Gakkuin. I plan on studying Japanese through college and hope I have the oppertunity to visit again.'
// 				},
// 				'football.file': {
// 					'title': 'Football',
// 					'img':'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_...----.._<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,:\':::::.&nbsp&nbsp&nbsp&nbsp&nbsp`>.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,\'&nbsp|:::::;\'&nbsp&nbsp&nbsp&nbsp&nbsp|:::.<br>&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp`\'::\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:::::\\<br>&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_____&nbsp&nbsp&nbsp&nbsp&nbsp`::;\\<br>&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/:::::\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`&nbsp&nbsp:<br>&nbsp&nbsp&nbsp|&nbsp,.&nbsp&nbsp&nbsp&nbsp&nbsp\/:::::::\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp|;:::.&nbsp&nbsp&nbsp`::::::;\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp::::::&nbsp&nbsp&nbsp&nbsp&nbsp`::;\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,.&nbsp&nbsp;<br>&nbsp&nbsp&nbsp&nbsp\\:::\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,::::\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\:::\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`.&nbsp&nbsp&nbsp&nbsp&nbsp,:.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:;\'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`-.::::::..&nbsp&nbsp_.\'\'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp```----\'\'\'',
// 					'description': 'I enjoy playing and watchin football (soccer). Currently, I play intramural soccer and bach home I represented my highschool.'
// 				},
// 				'chocolate_milk.file': {
// 					'title': "Chocolate Milk",
// 					'img':'&nbsp&nbsp&nbsp_________<br>&nbsp&nbsp|&nbsp_______&nbsp|<br>&nbsp\/&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\<br>\/___\\_________\\<br>|&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbspM&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|\\&nbsp&nbspI&nbsp&nbsp\\&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp\\&nbsp&nbspL&nbsp&nbsp\\|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbspK&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp|<br>|___|_______\\_|',
// 					'description': 'As the name of this site implies, I really do love chocolate milk. I drink about 2 cups of hot chocolate a day and have written blog posts on the bet chocolate milks from around New York City.'
// 				},
// 				'video_games.file': {
// 					'title': "Video Games",
// 					'img':"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+.-\'_____\'-.---------------------------.-\'_____\'-.+<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspA&nbspB&nbspH&nbspI&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp.\'&nbsp&nbsp|&nbsp&nbsp_&nbsp&nbsp|&nbsp&nbsp&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/|\\&nbsp|___&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/_\\&nbsp|___&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp;&nbsp&nbsp__&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp;&nbsp|&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|&nbsp<---&nbsp&nbsp&nbsp--->&nbsp|&nbsp|&nbsp|__|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|_:>&nbsp|&nbsp||_|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(_)|&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|___&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp___|&nbsp;SELECT&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSTART&nbsp;&nbsp|___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp___|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|\\&nbsp&nbsp&nbsp&nbsp|&nbsp\\|\/&nbsp|&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp|&nbsp(X)&nbsp|&nbsp&nbsp&nbsp&nbsp\/|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp|_____|&nbsp&nbsp.\',\'\"&nbsp\"\',&nbsp|___|&nbsp&nbsp,\'\"&nbsp\"\',&nbsp\'.&nbsp&nbsp|_____|&nbsp&nbsp.\'&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'-.______.-\'&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\ANALOG\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp\'-._____.-\'&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|------|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp\'.___.\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\'.___.\'&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\________\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\_________\/",
// 					'description': ''
// 				},
// 				'video_games.file': {
// 					'title': "Video Games",
// 					'img':"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+.-\'_____\'-.---------------------------.-\'_____\'-.+<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspA&nbspB&nbspH&nbspI&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp.\'&nbsp&nbsp|&nbsp&nbsp_&nbsp&nbsp|&nbsp&nbsp&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/|\\&nbsp|___&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/_\\&nbsp|___&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp;&nbsp&nbsp__&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp;&nbsp|&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|&nbsp<---&nbsp&nbsp&nbsp--->&nbsp|&nbsp|&nbsp|__|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|_:>&nbsp|&nbsp||_|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(_)|&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|___&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp___|&nbsp;SELECT&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSTART&nbsp;&nbsp|___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp___|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|\\&nbsp&nbsp&nbsp&nbsp|&nbsp\\|\/&nbsp|&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp|&nbsp(X)&nbsp|&nbsp&nbsp&nbsp&nbsp\/|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp|_____|&nbsp&nbsp.\',\'\"&nbsp\"\',&nbsp|___|&nbsp&nbsp,\'\"&nbsp\"\',&nbsp\'.&nbsp&nbsp|_____|&nbsp&nbsp.\'&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'-.______.-\'&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\ANALOG\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp\'-._____.-\'&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|------|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp\'.___.\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\'.___.\'&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\________\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\_________\/",
// 					'description': ''
// 				}			
// 			}
// 		}
// 	};
// 	$scope.current_dir = $scope.files;
// 	$scope.enter_command = function(command) {
// 		$scope.commands += $scope.guest + " >> " + command + "<br />";
// 		$scope.current_command = "";
// 		if (command === "clear") {
// 			$scope.commands = "";
// 		} else if (command === "ls") {
// 			for (var key in $scope.current_dir) {
// 				if (key.substring(0,1) != '.') {
// 					$scope.commands += key + "&nbsp&nbsp&nbsp";
// 				}
// 			}
// 			$scope.commands += "<br />"
// 		} else if (command.trim() === "cd") {
// 			$scope.current_dir = $scope.files;
// 			$scope.path = [];
// 		} else if (command.substring(0,3) === "cd ") {
// 			var arr = command.substring(3).trim().split('/');
// 			for (var i = 0; i < arr.length; i++) {
// 				if ($scope.current_dir[arr[i].trim()] != undefined && $scope.current_dir[arr[i].trim()]['.is_dir']) {
// 					$scope.current_dir = $scope.current_dir[arr[i].trim()];
// 					$scope.path.push(arr[i].trim());
// 				} else {
// 					var matches = command.match(/\.{2}/g);
// 					if (matches.length > 0) {
// 						$scope.current_dir = $scope.files;
// 						for(var i = 0; i < ($scope.path.length-matches.length);i++) {
// 							$scope.current_dir = $scope.current_dir[$scope.path[i]];
// 						}
// 						for(var i = $scope.path.length-1; i >= ($scope.path.length-matches.length);i--) {
// 							$scope.path.pop();
// 						}
// 					} else {
// 						$scope.commands += "Sorry thats not a directory<br />";
// 					}
// 				}
// 			}	
// 		} else if (command.substring(0,4).trim() === "cat") {
// 			var arr = command.substring(3).trim().split(/[ ,]+/);
// 			for (var i in arr) {
// 				if ($scope.current_dir[arr[i]] && typeof($scope.current_dir[arr[i]])==='string'){
// 					$scope.commands += '<br>' + $scope.current_dir[arr[i]] + "<br><br>";
// 				} else {
// 					$scope.commands += '<pi style=\"color:#ff0033;margin:0; margin-top: 10px;\">'+arr[i]+' is not a txt file</pi>';
// 				}
// 			}
// 		} else if (command.trim().substring(0,3) === "pwd") {
// 			if ($scope.path.length === 0) {
// 				$scope.commands += 'root<br>'
// 			} else {
// 				for(var i = 0; i < $scope.path.length; i++) {
// 					$scope.commands += "/" + $scope.path[i];
// 				}
// 				$scope.commands += "<br>";
// 			}
// 		} else if (command.trim() == "") {

// 		} else if (command.substring(0,5).trim() === "open") {
// 			var file = command.substring(5).trim();
// 			if (file.substring(file.length - 5) === '.file') {
// 				$scope.commands += '<br><div class="col-md-6">' + $scope.current_dir[file]['img'] + '</div>';
// 				$scope.commands += '<div class="col-md-6"><a target="_blank" href=\"'+$scope.current_dir[file]['url']+'\">'+$scope.current_dir[file]['title']+'</a>'+'<br>'+ $scope.current_dir[file]['description'] + '</div><br><br>';
// 			} else {

// 			}
// 		} else if (command.substring(0,7).trim() === "switch") {
// 			$scope.terminal = false;
// 			$scope.simple = true;

// 		} else {
// 			$scope.commands += "<p style=\"color:#ff0033;margin:0;\">OK so I made this during my OS class it's not actually a terminal. Just use basic linux commands (NO FLAGS I have a life)</p>";
// 		}
// 	};
// 	$scope.trust = $sce.trustAsHtml;
// });