$(function(){

  $('#submit').click(function(event){

    event.preventDefault();
    var selector = $('#selector').val();
    var property = $('#property').val();
    var value = $('#value').val();
    // console.log(selector_string);
    // console.log(property_string);
    // console.log(value_string);

    $(selector).css(property,value);
  });

});
