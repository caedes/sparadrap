window.onerror = function () {
  var words = 'aie ouille hurt ouch oops boo cry rah huh oh ahen wow poop'.split(' ');
  var rand = Math.floor((Math.random() * words.length));

  console.log(words[rand]);
};
