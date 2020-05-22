/**********
TITLE: Pick Me!  
AUTHOR: Harmanjot Singh (HS)
PURPOSE: Pick Me! Extra Credit Assignment
ORIGINALLY CREATED ON: 13 March 2019
LAST MODIFIED ON: 13 March 2019
LAST MODIFIED BY: Harmanjot Singh (HS)
MODIFICATION HISTORY: Original Build
**********/

$(document).ready(function() {
    //jQuery selection by tag
    $("#btn1").click(function(){
        $("p").append("<b>.</b>");
        $("body").css({"background-image": 'url("pickship2.jpg")',
                        "background-repeat": "no-repeat",
                        "background-attachment" : "fixed",
                        "background-position": "center",
                        "background-size": "cover",
	                    "max-width": "100%",
  	                    "height": "auto"});
    });

    //jQuery selection by class
    $("#btn2").click(function(){
        $(".html").css({"font-family": "Comic Sans MS", 
                    "color": "green"});
    });

    //jQuery selection by id
    $("#btn3").click(function(){
        $("#line9").css({"border": "3px solid blue",
                        "background-color": "white"});
        $("#line2").css({"border": "3px solid red",
                        "background-color": "white"});
        $("#line6").css({"border": "3px solid orange",
                        "background-color": "white"});
    });

    //styling by multiple instructions
    $("#btn4").click(function(){
        $("#line3").css("background-color", "purple")
                    .append(" background color")
                    .fadeOut("slow")
                    .fadeIn("slow")
                    .append(", and fades.");
        $("#line10").css("font-size", "45px",
                        "fontWeight", "bold",
                        "color", "grey")
                    .fadeOut("slow")
                    .fadeIn("slow");
        $("#line4").css("text-decoration", "line-through red")
                    .fadeOut("slow")
                    .fadeIn("slow");
    });

    //filtered jQuery selection by tag name
    $("#btn5").click(function(){
        $("div:has(p)").css({"border": "3px solid brown"});
        $("p:even").css({"font-family": "Cursive"});
        $("p:odd").css({"border": "3px dashed magenta"});
    });

    //filtered jQuery selection by class name
    $("#btn6").click(function(){
        $(".css:first").css({"color": "magenta",
                            "font-style": "oblique"});
        $(".html:last").css({"color": "darkgreen",
                            "font-style": "italic"});
        $(".jquery:parent").css({"color": "darkred",
                            "font-style": "normal"});
    });
    //filtered jQuery selection by id name
    $("#btn7").click(function(){
        $("#line9:parent").css({"border": "2px solid orange",
                                "color": "magenta",
                                "font-weight": "bold"});
        $("#line2:first").css({"border": "2px solid black",
                                "color": "blue",
                                "font-weight": "bold"});
        $("#line6:last").css({"border": "2px solid yellow",
                                "color": "darkgrey",
                                "font-weight": "bold"});
    });

}); 