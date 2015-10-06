var _WORDS=0;
var _PHRASES=1;
var _LESSON=2;
var _UNDEFINED=-1;
var currentPage;

var soundTrack;
var soundCount;
var indexCount;

var timeout = 5000;//in milliseconds
var repeatEachTime = 2;
var currentTime = 0;
function playSound() {
	if (!soundTrack) {
		soundTrack = getSoundTrackList();
	}

    if (indexCount >= soundCount) {
        return;
    }
    if (currentTime >= repeatEachTime) {
        indexCount++;
        currentTime = 0;
    }
    currentTime++;
	executeSound();

    setTimeout(function () {
        playSound();
    }, timeout);
}


function getSoundTrackList() {
	switch(currentPage) {
    case _WORDS:
        soundTrack = $("table tr table tr table tr");
        break;
    case _PHRASES:
        soundTrack = $("table tr table tr table tr");
        break;
	case _LESSON:
        soundTrack = $("table tr table tr table tr");
        break;	
    default:
        soundTrack = null;
	}

	soundCount = soundTrack.length;
	return soundTrack;
}

function executeSound(){
	try {
		if (soundTrack[indexCount]) {
			switch(currentPage) {
			case _WORDS:
				soundTrack[indexCount].cells[1].childNodes[0].childNodes[1].click();
				break;
			case _PHRASES:
				soundTrack[indexCount].cells[2].childNodes[0].childNodes[1].click();
				break;
			case _LESSON:
				soundTrack[indexCount].cells[2].childNodes[0].childNodes[1].click();
				break;	
			default:
				soundTrack = null;
			}
		}
	} catch(e) {
		playSound();
	}
}

function initialize() {
	var url = location.toString();
	if (url.indexOf("english-words") != -1) {
		currentPage = _WORDS;
		indexCount = 5;
	} else if (url.indexOf("english-phrases") != -1) {
		currentPage = _PHRASES;
		indexCount = 6;
	} else if (url.indexOf("english-lesson") != -1) {
		currentPage = _LESSON;
	} else {
		currentPage = _UNDEFINED;
	}
	//execute playlist
	playSound();
}

//init
initialize();


