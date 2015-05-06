(function(){
    var app = app || {};
    
    //template function helper
    window.templateFunc = function(id){
      return _.template($('#'+id).html());  
    };
    
    //cache DOM elements
    app = {
        template : templateFunc('projectTemplate'),
        $data : $("#data")
        
    };
    
    $('.heartbeat').show();
    $.getJSON('https://dl.dropboxusercontent.com/u/2122820/project.json', function(data){
     //data = JSON.parse(data);
       console.log(typeof(data));
        var projects = (data.projects);
        console.log(projects);
        
        projects.forEach(function(project){
           builtTemplate(project);
            
        });
        $('.heartbeat').hide();
      
    });
    
    function builtTemplate(project){
        var html = app.template(project);
        app.$data.append(html);
    }
    
    

}());