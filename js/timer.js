var Countdown = {
  $el: document.querySelector('.countdown'),
  countdown_interval: null,
  total_seconds: 0,

  init: function() {
    this.$ = {
      hours: this.$el.querySelectorAll('.bloc-time.hours .figure'),
      minutes: this.$el.querySelectorAll('.bloc-time.min .figure'),
      seconds: this.$el.querySelectorAll('.bloc-time.sec .figure')
    };

    // Set the end date (3rd February 2024)
    var endDate = new Date("February 3, 2024 00:00:00").getTime();
    
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time in seconds
    this.total_seconds = Math.floor((endDate - now) / 1000);

    this.count();
  },

  count: function() {
    var that = this;

    this.countdown_interval = setInterval(function() {
      if (that.total_seconds > 0) {
        --that.total_seconds;

        // Calculate hours, minutes, and seconds
        var hours = Math.floor((that.total_seconds / 3600));
        var minutes = Math.floor((that.total_seconds % 3600) / 60);
        var seconds = that.total_seconds % 60;

        // Update DOM values
        that.animateFigure(that.$.hours[0], Math.floor(hours / 10));
        that.animateFigure(that.$.hours[1], hours % 10);

        that.animateFigure(that.$.minutes[0], Math.floor(minutes / 10));
        that.animateFigure(that.$.minutes[1], minutes % 10);

        that.animateFigure(that.$.seconds[0], Math.floor(seconds / 10));
        that.animateFigure(that.$.seconds[1], seconds % 10);
      } else {
        clearInterval(that.countdown_interval);
      }
    }, 1000);
  },

  animateFigure: function($el, value) {
    var $top = $el.querySelector('.top');
    var $bottom = $el.querySelector('.bottom');
    var $back_top = $el.querySelector('.top-back');
    var $back_bottom = $el.querySelector('.bottom-back');

    $back_top.querySelector('span').innerHTML = value;
    $back_bottom.querySelector('span').innerHTML = value;

    TweenMax.to($top, 0.8, {
      rotationX: '-180deg',
      transformPerspective: 300,
      ease: Quart.easeOut,
      onComplete: function() {
        $top.innerHTML = value;
        $bottom.innerHTML = value;
        TweenMax.set($top, { rotationX: 0 });
      }
    });

    TweenMax.to($back_top, 0.8, {
      rotationX: 0,
      transformPerspective: 300,
      ease: Quart.easeOut,
      clearProps: 'all'
    });
  },

  checkHour: function(value, $el_1, $el_2) {  
      
    var val_1       = value.toString().charAt(0),
        val_2       = value.toString().charAt(1),
        fig_1_value = $el_1.querySelector('.top').innerHTML,
        fig_2_value = $el_2.querySelector('.top').innerHTML;

    if(value >= 10) {

      // Animate only if the figure has changed
      if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
      if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
    }
    else {

      // If we are under 10, replace the first figure with 0
      if(fig_1_value !== '0') this.animateFigure($el_1, 0);
      if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
    }    
  }
};

Countdown.init();