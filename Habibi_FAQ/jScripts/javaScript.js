var selectedTab;

$( document ).ready(function() {

    $("li.liNavBar a").click(function(){
        $( "li.liNavBar" ).each(function() {
            $("li.liNavBar a").removeClass( "selected" );
            $("li.liNavBar a").addClass( "unselected" );

            $(event.target).not("img").removeClass( "unselected" );
            $(event.target).not("img").addClass("selected");
        });    
    });

    $(".hamburger").click(function(){
        $(".hamburger").toggleClass("is-active"); 
        $("#menu").toggleClass("menuOpen");
        //          $( "#menu" ).toggle( "slide", { direction: "right" } );
    });

    $("#container").click(function(){
        $("#menu").removeClass("menuOpen");
});
    });


    function click1(){
        selectedTab = "1";
        localStorage.setItem("selectedTab", selectedTab);
    }

    function click2(){
        selectedTab = "2";
        localStorage.setItem("selectedTab", selectedTab);
    }

    function click3(){
        selectedTab = "3";
        localStorage.setItem("selectedTab", selectedTab);
    }

    function click4(){
        selectedTab = "4";
        localStorage.setItem("selectedTab", selectedTab);
    }

    function click5(){
        selectedTab = "5";
        localStorage.setItem("selectedTab", selectedTab);
    }

    function onPageLoad(){
        selectedTab = localStorage.getItem("selectedTab");
        $("div.tab-content div").removeClass( "in active" );
        $("#" + selectedTab).addClass( "in active" ); 

        $(".liNavBar a").removeClass("selected");
        $(".liNavBar a").addClass("unselected");

        $("#a" + selectedTab).addClass("selected");
        $("#a" + selectedTab).removeClass("unselected");
    }

    function homepageLoad(){
        $("#menu").addClass( "menuClose2" );  
    }