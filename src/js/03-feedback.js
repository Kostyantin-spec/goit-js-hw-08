import throttle from 'lodash.throttle';

jQuery(window).on('scroll', _.throttle(updatePosition, 100));

var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
jQuery(element).on('click', throttled);

jQuery(window).on('popstate', throttled.cancel);
