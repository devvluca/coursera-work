(function () {

    var helloSpeaker = {};

    var speakWordHello = "Hello";

    helloSpeaker.speak = function (name) {
      console.log(speakWordHello + " " + name);
    };

    window.helloSpeaker = helloSpeaker;

})();
