$( document ).ready(function() {

    $("a").click(function(){
        $( "li" ).each(function() {
            //  console.log( index + ": " + $( this ).text() );
            var item = "li a";
//            if (item != event.target){
                $("li a").removeClass( "selected" );
                $("li a").addClass( "unselected" );

//            }else{
                $(event.target).removeClass( "unselected" );
                $(event.target).addClass("selected");

//            }
        });    
    });


});