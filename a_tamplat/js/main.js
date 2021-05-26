$(document).ready(function() {


    $('.btn_filters').on('click', function(){
        $('.btn_filters').toggleClass('active');
        $('.wr_flex .filters').toggleClass('active');
        $('body').toggleClass('mob_body');
    });
  
});