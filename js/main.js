var app = angular.module("Terminal",[]);
app.controller('MainCtrl', function($scope, $sce) {
	$scope.guest = "guest";
	$scope.commands = "";
	$scope.current_command = "";
	$scope.path = [];
	$scope.files = {
		'.is_root': true,
		'.is_dir': true,
		'abhinav': {	
			'.is_dir': true,
			'about_me.txt': "My name is Abhinav Havaldar. I am currently a student at NYU studying Math and Computer Science. I am from Bombay but currently live in New York.",
			'contact_me.txt': 'Cell Phone Number: <b>(917)-769-4595</b><br>Address: <b>80 Lafayette St. New York 10013</b>',
			'projects.dir': {
				'.is_dir': true,
				'Baron_Up.file' : {
					'title': 'Baron_Up', 
					'dexcription': '', 
					'url': "www.baronup.com"
				},
				'Parsely.file' : {
					'title': 'Parsely', 
					'dexcription': '', 
					'url': "www.baronup.com"
				},
				'ASCIIng.file' : {
					'title': 'ASCIIng', 
					'dexcription': '', 
					'url': "www.baronup.com"
				}
			},
			'volunteer_work.dir': {
				'.is_dir': true,
				'Makethon_of_Kindness.file' : {
					'title': 'Makethon_of_Kindness', 
					'dexcription': '', 
					'url': "www.baronup.com"
				},
				'' : {
					'title': 'Makethon_of_Kindness', 
					'dexcription': '', 
					'url': "www.baronup.com"
				},
				'' : {
					'title': 'Makethon_of_Kindness', 
					'dexcription': '', 
					'url': "www.baronup.com"
				}
			},
			'experience.dir': {
				'.is_dir': true,
				'anime_manga.file': "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_____<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp\\<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspvvvvvvv&nbsp&nbsp\/|__\/|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspI&nbsp&nbsp&nbsp\/O,O&nbsp&nbsp&nbsp|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspI&nbsp\/_____&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/|\/|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspJ|\/^&nbsp^&nbsp^&nbsp\\&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp\/00&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp_\/\/|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|^&nbsp^&nbsp^&nbsp^&nbsp|W|&nbsp&nbsp&nbsp|\/^^\\&nbsp|&nbsp&nbsp&nbsp\/oo&nbsp|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\m___m__|_|&nbsp&nbsp&nbsp&nbsp\\m_m_|&nbsp&nbsp&nbsp\\mm_|",
				'football.file': '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_...----.._<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,:\':::::.&nbsp&nbsp&nbsp&nbsp&nbsp`>.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,\'&nbsp|:::::;\'&nbsp&nbsp&nbsp&nbsp&nbsp|:::.<br>&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp`\'::\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:::::\\<br>&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_____&nbsp&nbsp&nbsp&nbsp&nbsp`::;\\<br>&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/:::::\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`&nbsp&nbsp:<br>&nbsp&nbsp&nbsp|&nbsp,.&nbsp&nbsp&nbsp&nbsp&nbsp\/:::::::\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp|;:::.&nbsp&nbsp&nbsp`::::::;\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp::::::&nbsp&nbsp&nbsp&nbsp&nbsp`::;\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,.&nbsp&nbsp;<br>&nbsp&nbsp&nbsp&nbsp\\:::\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,::::\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\:::\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`.&nbsp&nbsp&nbsp&nbsp&nbsp,:.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:;\'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`-.::::::..&nbsp&nbsp_.\'\'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp```----\'\'\'',
				'chocolate_milk.file': '&nbsp&nbsp&nbsp_________<br>&nbsp&nbsp|&nbsp_______&nbsp|<br>&nbsp\/&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\<br>\/___\\_________\\<br>|&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbspM&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|\\&nbsp&nbspI&nbsp&nbsp\\&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp\\&nbsp&nbspL&nbsp&nbsp\\|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbspK&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp|<br>|___|_______\\_|',
				'video_games.file': "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+.-\'_____\'-.---------------------------.-\'_____\'-.+<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspA&nbspB&nbspH&nbspI&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp.\'&nbsp&nbsp|&nbsp&nbsp_&nbsp&nbsp|&nbsp&nbsp&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/|\\&nbsp|___&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/_\\&nbsp|___&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp;&nbsp&nbsp__&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp;&nbsp|&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|&nbsp<---&nbsp&nbsp&nbsp--->&nbsp|&nbsp|&nbsp|__|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|_:>&nbsp|&nbsp||_|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(_)|&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|___&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp___|&nbsp;SELECT&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSTART&nbsp;&nbsp|___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp___|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|\\&nbsp&nbsp&nbsp&nbsp|&nbsp\\|\/&nbsp|&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp|&nbsp(X)&nbsp|&nbsp&nbsp&nbsp&nbsp\/|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp|_____|&nbsp&nbsp.\',\'\"&nbsp\"\',&nbsp|___|&nbsp&nbsp,\'\"&nbsp\"\',&nbsp\'.&nbsp&nbsp|_____|&nbsp&nbsp.\'&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'-.______.-\'&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\ANALOG\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp\'-._____.-\'&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|------|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp\'.___.\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\'.___.\'&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\________\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\_________\/"
			},
			'interests.dir': {
				'.is_dir': true,
				'anime_manga.file': {
					'title': 'Anime and Manga',
					'img':"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_____<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp\\<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspvvvvvvv&nbsp&nbsp\/|__\/|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspI&nbsp&nbsp&nbsp\/O,O&nbsp&nbsp&nbsp|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspI&nbsp\/_____&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/|\/|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspJ|\/^&nbsp^&nbsp^&nbsp\\&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp\/00&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp_\/\/|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|^&nbsp^&nbsp^&nbsp^&nbsp|W|&nbsp&nbsp&nbsp|\/^^\\&nbsp|&nbsp&nbsp&nbsp\/oo&nbsp|<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\m___m__|_|&nbsp&nbsp&nbsp&nbsp\\m_m_|&nbsp&nbsp&nbsp\\mm_|",
					'description': 'I love watching anime and reading manga. In fact, I spent a summer in Japan studying animation techniques and Japanese Languag at the Yoyogi Animation Gakkuin. I plan on studying Japanese through college and hope I have the oppertunity to visit again.'
				},
				'football.file': {
					'title': 'Football',
					'img':'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_...----.._<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,:\':::::.&nbsp&nbsp&nbsp&nbsp&nbsp`>.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,\'&nbsp|:::::;\'&nbsp&nbsp&nbsp&nbsp&nbsp|:::.<br>&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp`\'::\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:::::\\<br>&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_____&nbsp&nbsp&nbsp&nbsp&nbsp`::;\\<br>&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/:::::\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`&nbsp&nbsp:<br>&nbsp&nbsp&nbsp|&nbsp,.&nbsp&nbsp&nbsp&nbsp&nbsp\/:::::::\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp|;:::.&nbsp&nbsp&nbsp`::::::;\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp::::::&nbsp&nbsp&nbsp&nbsp&nbsp`::;\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,.&nbsp&nbsp;<br>&nbsp&nbsp&nbsp&nbsp\\:::\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,::::\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\:::\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`.&nbsp&nbsp&nbsp&nbsp&nbsp,:.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:;\'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`-.::::::..&nbsp&nbsp_.\'\'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp```----\'\'\'',
					'description': 'I enjoy playing and watchin football (soccer). Currently, I play intramural soccer and bach home I represented my highschool.'
				},
				'chocolate_milk.file': {
					'title': "Chocolate Milk",
					'img':'&nbsp&nbsp&nbsp_________<br>&nbsp&nbsp|&nbsp_______&nbsp|<br>&nbsp\/&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\<br>\/___\\_________\\<br>|&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbspM&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|\\&nbsp&nbspI&nbsp&nbsp\\&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp\\&nbsp&nbspL&nbsp&nbsp\\|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbspK&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp|<br>|&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp|<br>|___|_______\\_|',
					'description': 'As the name of this site implies, I really do love chocolate milk. I drink about 2 cups of hot chocolate a day and have written blog posts on the bet chocolate milks from around New York City.'
				},
				'video_games.file': {
					'title': "Video Games",
					'img':"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+.-\'_____\'-.---------------------------.-\'_____\'-.+<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspA&nbspB&nbspH&nbspI&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp.\'&nbsp&nbsp|&nbsp&nbsp_&nbsp&nbsp|&nbsp&nbsp&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/|\\&nbsp|___&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/_\\&nbsp|___&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp;&nbsp&nbsp__&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp;&nbsp|&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|&nbsp<---&nbsp&nbsp&nbsp--->&nbsp|&nbsp|&nbsp|__|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|_:>&nbsp|&nbsp||_|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(_)|&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|___&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp___|&nbsp;SELECT&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSTART&nbsp;&nbsp|___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp___|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|\\&nbsp&nbsp&nbsp&nbsp|&nbsp\\|\/&nbsp|&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp|&nbsp(X)&nbsp|&nbsp&nbsp&nbsp&nbsp\/|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp|_____|&nbsp&nbsp.\',\'\"&nbsp\"\',&nbsp|___|&nbsp&nbsp,\'\"&nbsp\"\',&nbsp\'.&nbsp&nbsp|_____|&nbsp&nbsp.\'&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'-.______.-\'&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\ANALOG\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp\'-._____.-\'&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|------|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp\'.___.\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\'.___.\'&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\________\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\_________\/",
					'description': ''
				},
				'video_games.file': {
					'title': "Video Games",
					'img':"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_=====_<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp_____&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+.-\'_____\'-.---------------------------.-\'_____\'-.+<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspA&nbspB&nbspH&nbspI&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp.\'&nbsp&nbsp|&nbsp&nbsp_&nbsp&nbsp|&nbsp&nbsp&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/|\\&nbsp|___&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp___|&nbsp\/_\\&nbsp|___&nbsp\\<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp;&nbsp&nbsp__&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp;&nbsp|&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|&nbsp<---&nbsp&nbsp&nbsp--->&nbsp|&nbsp|&nbsp|__|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|_:>&nbsp|&nbsp||_|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(_)|&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp|___&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp___|&nbsp;SELECT&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSTART&nbsp;&nbsp|___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp___|&nbsp;<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|\\&nbsp&nbsp&nbsp&nbsp|&nbsp\\|\/&nbsp|&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp___&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp|&nbsp(X)&nbsp|&nbsp&nbsp&nbsp&nbsp\/|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp\\&nbsp&nbsp&nbsp|_____|&nbsp&nbsp.\',\'\"&nbsp\"\',&nbsp|___|&nbsp&nbsp,\'\"&nbsp\"\',&nbsp\'.&nbsp&nbsp|_____|&nbsp&nbsp.\'&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp\'-.______.-\'&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\ANALOG\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp\'-._____.-\'&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|------|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp\'.___.\'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\'.___.\'&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\________\/&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\\_________\/",
					'description': ''
				}			
			}
		}
	};
	$scope.current_dir = $scope.files;
	$scope.enter_command = function(command) {
		$scope.commands += $scope.guest + " >> " + command + "<br />";
		$scope.current_command = "";
		if (command === "clear") {
			$scope.commands = "";
		} else if (command === "ls") {
			for (var key in $scope.current_dir) {
				if (key.substring(0,1) != '.') {
					$scope.commands += key + "&nbsp&nbsp&nbsp";
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
			var arr = command.substring(3).trim().split(/[ ,]+/);
			for (var i in arr) {
				if ($scope.current_dir[arr[i]] && typeof($scope.current_dir[arr[i]])==='string'){
					$scope.commands += '<br>' + $scope.current_dir[arr[i]] + "<br><br>";
				} else {
					$scope.commands += '<pi style=\"color:#ff0033;margin:0; margin-top: 10px;\">'+arr[i]+' is not a txt file</pi>';
				}
			}
		} else if (command.trim().substring(0,3) === "pwd") {
			if ($scope.path.length === 0) {
				$scope.commands += 'root<br>'
			} else {
				for(var i = 0; i < $scope.path.length; i++) {
					$scope.commands += "/" + $scope.path[i];
				}
				$scope.commands += "<br>";
			}
		} else if (command.trim() == "") {

		} else if (command.substring(0,5).trim() === "open") {
			var file = command.substring(5).trim();
			if (file.substring(file.length - 5) === '.file') {
				$scope.commands += '<br>' + $scope.current_dir[file]['img'] + '<br>';
				$scope.commands += '<a href=\"'+$scope.current_dir[file]['url']+'\">'+$scope.current_dir[file]['title']+'</a>'+'<br>';
				$scope.commands += $scope.current_dir[file]['description'] + '<br><br>';
			} else {

			}
		} else {
			$scope.commands += "<p style=\"color:#ff0033;margin:0;\">OK so I made this during my OS class it's not actually a terminal. Just use basic linux commands (NO FLAGS I have a life)</p>";
		}
	};
	$scope.trust = $sce.trustAsHtml;
});