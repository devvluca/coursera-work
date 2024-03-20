(function () {

    var byeSpeaker = {};

    var speakWordBye = "Good Bye";

    byeSpeaker.speak = function (name) {
      console.log(speakWordBye + " " + name);
    };

    window.byeSpeaker = byeSpeaker;

})();
