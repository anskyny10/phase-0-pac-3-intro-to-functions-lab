function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(spy) {
    console.log(spy.toUpperCase());
}

function logWhisper(spy) {
    console.log(spy.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
    }