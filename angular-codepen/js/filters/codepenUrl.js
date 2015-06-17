//filter codepen url from
//http://codepen.io/rattanakchea/pen/GJEmeO
//to
//http://codepen.io/rattanakchea/full/GJEmeO
//basically replace "pen" with "full"

app.filter('codepenUrl', function(){
	return function(input){
		//replace the last occurence of "pen" with "full"
		return input.replace("pen/", "full/");
	};
});