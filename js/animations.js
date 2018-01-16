(function($) {
  "use strict"; // Start of use strict

  var controller = new ScrollMagic.Controller();

  setTimeout(function () {
    $('.section').each(function () {
      var currentSection = this;
      console.log(currentSection);

      new ScrollMagic.Scene({
        triggerElement: currentSection,
        triggerHook: 0.8,
        offset: 0,
        reverse: false
      }).on('start', function () {
          scrollSection(currentSection);
      }).addTo(controller);
    });
  }, 500);

  function scrollSection(section) {

    var titles = $(section).find('.row');
    var timeline = new TimelineMax();
    var tweenConfig = [{
      method: 'set',
      parameters: [section, {css: {className: '+=visible'}}]
    }];

    if (titles.length) {
      tweenConfig.push({
        method: 'to',
        parameters: [titles, 0.8, {opacity: 1, marginTop: '+=60'}]
      });
    }

    runTween(timeline, tweenConfig);
  }

  function runTween(timeline, tweenConfig) {
    tweenConfig.forEach(function (config) {
      var method = timeline[config.method];
      timeline = method.apply(timeline, config.parameters);
    });
  }

})(jQuery);

