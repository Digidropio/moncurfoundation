/**
 * @file
 */

(function ($) {

  'use strict';
  Drupal.behaviors.moncur_navigation = {
    attach: function () {
      $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $('header').addClass('shrink');
        } else {
          $('header').removeClass('shrink');
        }
      });
    }
  };

})(jQuery);