(function(){
    'use strict';
    var offon= true;
    $("#menu-icon").click(function(){
        if(offon){
            $('#nav__content--menu').slideDown(300);
            offon=false;
        }else{
            $('#nav__content--menu').slideUp(300,function(){
                $('#nav__content--menu').removeAttr("style");        
            });
        offon=true;    
        }
    });
})();