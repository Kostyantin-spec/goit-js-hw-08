import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate',
throttle(function({seconds}) {
    localStorage.setItem("videoplayer-current-time", 
    seconds);
    console.log(localStorage);
}, 1000));

const currentTimeFromStorage = localStorage.getItem("videoplayer-current-time");

if (currentTimeFromStorage !== null) {
    const currentTimeInSeconds = parseFloat(currentTimeFromStorage);

player.setCurrentTime(currentTimeInSeconds).then(function(seconds) {
    player.play().then(function() {
        console.log('the video was played');
    }).catch(function(error) {
        console.log(error);
    });;
})
}
// player.setCurrentTime(30.456).then(function(seconds) {
//     seconds = the actual time that the player seeked to
// }).catch(function(error) {
//    switch (error.name) {
//        case 'RangeError':
//             the time was less than 0 or greater than the video’s duration
//            break;

//        default:
//             some other error occurred
//            break;
//    }
// });

