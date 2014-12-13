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
    
    $.get('js/project.json', function(data){
       
      var projects = data.projects;
      console.log(projects);
      
      projects.forEach(function(project){
         builtTemplate(project);
          
      });
      
    });
    
    function builtTemplate(project){
        var html = app.template(project);
        app.$data.append(html);
    }
    
    

}());