var html = `

<html>

	<body attr attr1= attr2=value2 attr3="value3" attr4='value4'>

	</body>

	<!-- comment -->

</html>

`

var js = `

function function_name(argument) {
	var string = "str\\"ing";
	var number = 1 + 2 / 3;
	// comment
	/*
	comment
	 */
}

`


// regular = {
//     html: {
//     	'"': 'string ('
//     		'\\': '转义 ('
//     			'.': '转义 )'
// 	    	'"': 'string )'
//     }
// }


`

string
"
 c
 \
  "


string
'
	c
	\
		c
'

block
{
	string

}


`

html: {
	number: [
		
	],
    string: [{
        start: '"',
        body: [

        ],
        end: '"',
    }]
}
