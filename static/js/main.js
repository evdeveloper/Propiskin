$(document).ready(function () {
    svg4everybody({});

    function clickMenu() {
        $('.menu__item').on('click', function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
    clickMenu();

    function clickTable() {
        $('.price-table__item').on('click', function(){
            $(this).parent().next().toggleClass('table-active');
            $(this).children('.price-table__arrow').toggleClass('active');
           
        })
    }
    clickTable();

    // function clickTarget() {
    //     $('.price-table__item').on('click', function() {
    //         if($('.tbody').siblings('.price-tr__inner').is('.table-active')) {
            
    //         }
    //     })
    // }
    // clickTarget();

    function menuActive() {
        $('.mobile-menu').on('click', function(){
            $('.m-menu').toggleClass('active-menu');
        })
    }
    menuActive();
    
    function menuClose() {
        $('.m-menu__top').on('click', function(){
            $('.m-menu').removeClass('active-menu');
        })
    }
    menuClose();

    function tableShow() {
        $('.price-table__show').on('click', function(){
            $('.overlay').css({'display': 'none'});
            $('.price-table__show').hide();
            $('.table-hide').css({'display': 'table-row'});
        })
    }
    tableShow();

});