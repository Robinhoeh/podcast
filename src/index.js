import $ from 'jquery';

$(document).ready( () => {
  $('.hamburger').on('click', () => {
  	$('.menu').toggleClass('dropDown');
  	$('.menu ul').toggleClass('show').on('click', () => {
  	});
  });
});

