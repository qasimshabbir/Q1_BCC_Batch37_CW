"use strict";
function announceSong(song, singer) {
    console.log('Song is ', song);
    if (singer) {
        console.log('Singer is', singer);
    }
}
announceSong("The big day");
announceSong("The big day", "Justin");
//announceSong("Sky is blue",'Mehdi Hassan','Justing biber');
function announceSongDefault(song, singer = 'Public') {
    console.log('Song is ', song);
    console.log('Singer is', singer);
}
announceSongDefault("The big day1");
announceSongDefault("The big day2", "Justin");
