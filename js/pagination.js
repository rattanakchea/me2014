(function(){
	//get data
	var jsonPath = 'https://dl.dropboxusercontent.com/u/2122820/hosted_json/project.json';
	$.getJSON(jsonPath, callBack);

	var projects = []; //projects array
	var featuredProjects = [];  //hold 3 featured project3

	function callBack(data){
		projects = data.projects;
		//console.log(projects);
		featuredProjects = projects.slice(0, 3);
	  	//console.log(featuredProjects);
	  	compileAndDisplayTemplate("#entry-template", "#projectLocation", projects);
	  	compileAndDisplayTemplate("#featured-template", "#featuredLocation", featuredProjects);
	  	paginate();
	  }

	  function getDescription(){
	  	$('td.description').each(function() {
	  		var text = $(this).html();
		    //create readmore link
		    if(text.length > 80){
		    	var shownText = text.substr(0, 80);
		    	var hiddenText = text.substr(80-1, text.length);
		    	$(this).html(shownText + '....');
		    }
		});
	  }
	  function createReadmore(text){
	  	if(text.length > 80){
	  		var shownText = text.substr(0, 80);
	  		var hiddenText = text.substr(80-1, text.length);

	  	}
	  }


	  function compileAndDisplayTemplate(templateId, location, data){
	  	var source = $(templateId).html();
	  	var template = Handlebars.compile(source);
	  	var html = template(data);
	  	$(location).html(html);
	  }

	  function paginate(){
	  	$('table.paginated').each(function() {
	  		var currentPage = 0;
	  		var numPerPage = 5;
	  		var $table = $(this);
	  		$table.bind('repaginate', function(e) {
	  			e.stopPropagation();
	  			$table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).fadeIn(1000);
	  		});
	  		$table.trigger('repaginate');
	  		var numRows = $table.find('tbody tr').length;
	  		var numPages = Math.ceil(numRows / numPerPage);
	  		var $pager = $('<div class="pager"></div>');
	  		for (var page = 0; page < numPages; page++) {
	  			$('<span class="page-number"></span>').text(page + 1).bind('click', {
	  				newPage: page
	  			}, function(event) {
	        	event.stopPropagation();  //prevents events bubble up
	        	currentPage = event.data['newPage'];
	        	$table.trigger('repaginate');
	        	$(this).addClass('active').siblings().removeClass('active');
	        }).appendTo($pager).addClass('clickable');
	  		}
	  		$pager.insertBefore($table).find('span.page-number:first').addClass('active');
	  	});
	}

}());