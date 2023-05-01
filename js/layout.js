//fullpage
$(document).ready(function(){
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally:true,
        navigation:true,
        slidesNavigation:true,
        slidesNavPosition:'bottom',
        controlArrows:true,
        loopBottom:true,
        fixedElements:'#header',
        menu:'#menu',
        anchors:['firstPage','secondPage','thirdPage','fourthPage','fifthPage'],
        navigationPosition:'left',
        responsiveWidth: 1025,
    });
});