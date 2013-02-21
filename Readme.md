# Contents

**Chapman Siu**

Table of Contents generator. Influenced by [Janko's Table of Contents using Jquery](http://www.jankoatwarpspeed.com/post/2009/08/20/Table-of-contents-using-jQuery.aspx)

This script creates a table of contents based on `<h1>` to `<h3>` tags of a webpage. It auto generates id's for linking.

# Example

Check out the example provided in [example.html](example.html).

# Basic Usage

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
	<script src="jquery.tableofcontents.min.js" type="text/javascript" charset="utf-8"></script>

And all the script:

	$(document).ready(contents);
