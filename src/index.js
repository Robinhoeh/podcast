import $ from 'jquery';

$(document).ready( () => {
  $('.hamburger').on('click', () => {
  	$('.menu').toggleClass('dropDown');
  	$('.menu').hide('mobileMenu');
  });
});