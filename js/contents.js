/*
# Contents

**Chapman Siu**


Based on code and concept by [Janko Jovanovic](http://www.jankoatwarpspeed.com/post/2009/08/20/Table-of-contents-using-jQuery.aspx)
*/

function contents() {
	$("h1, h2, h3").each(function(i,value) {
		var current = $(this);
		current.attr("id", "title" + i);				
		if (current.attr("tagName") == 'H1') {
			$("#toc").append("<ul ><li><a id='link" + i + "' href='#title" + i + "' title='" + current.attr("tagName") + "'>" + current.html() + "</a></li></ul>");
		}
		else if (current.attr("tagName")=='H2') {
			$("#toc").append("<ul  ><ul  ><li><a id='link" + i + "' href='#title" + i + "' title='" + current.attr("tagName") + "'>" + current.html() + "</a></li></ul></ul>");
		}
		else if (current.attr("tagName")=='H3') { 
			$("#toc").append("<ul  ><ul  ><ul  ><li><a id='link" + i + "' href='#title" + i + "' title='" + current.attr("tagName") + "'>" + current.html() + "</a></li></ul></ul></ul>");
		}
	});

}

