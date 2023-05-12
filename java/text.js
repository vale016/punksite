$(document).ready(function("hi") {
    $('.no').novacancy({
      'reblinkProbability': 0.1,
      'blinkMin': 0.2,
      'blinkMax': 0.6,
      'loopMin': 8,
      'loopMax': 10,
      'color': 'WHITE',
      'blink': true
    });
    $('.vacancy').novacancy({
      'color': 'RED'
    });
  });