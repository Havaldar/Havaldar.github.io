angular
	.module('Terminal')
	.factory('musicService', function() {
		return {
			playSong: function(audio) {

			},
			pauseSong: function(audio) {
				audio.pause();
			},
			stopSong: function(audio) {
				audio.pause();
				audio.currentTime = 0;
			}
		}
	});