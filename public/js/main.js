// Dropdown button change text on option clicked
$(function(){
    $(".custom-dd-link .dropdown-item").click(function(){
        $(this).parent().siblings().html(`${$(this).text()} <i class="material-icons align-middle">keyboard_arrow_down</i>`);
   });

});