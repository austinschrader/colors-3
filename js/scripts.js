$(document).ready(function() {
        $("button#red").click(function() {
        $("body").removeClass();
        $("body").addClass("red-background");
    });

    $("button#green").click(function() {
        $("body").removeClass();
        $("body").addClass("green-background");
    });

    $("button#yellow").click(function() {
        $("body").removeClass();
        $("body").addClass("yellow-background");
    });

    $("button#dark-mode").click(function() {
        $("body").removeClass();
        $("body").addClass("dark-background");
        $("p").addClass("light-text");
        $("h1").addClass("light-text");
    });

    $("button#light-mode").click(function() {
        $("body").removeClass();
    });

    $("p").mouseover(function() {
        $("p").removeClass();
        $("p").addClass("highlight");
    });


});