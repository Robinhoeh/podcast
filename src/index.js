import $ from 'jquery';

$(document).ready( () => {
  $('.hamburger').on('click', () => {
  	$('.menu').toggleClass('mobileMenu');
  	$('.menu').show('menu ul');
  });
});