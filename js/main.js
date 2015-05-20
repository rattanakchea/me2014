(function(){
    var app = app || {};
    
    //template function helper
    window.templateFunc = function(id){
      return _.template($('#'+id).html());  
    };
    
    function builtTemplate(project, id, location){
        var tpl = templateFunc(id);
        var html = tpl(project);
        //app.$data.append(html);
        $('#'+location).append(html);
    }
    
    $('.heartbeat').show();
    $.getJSON('https://dl.dropboxusercontent.com/u/2122820/hosted_json/project.json', function(data){
     //data = JSON.parse(data);
        var projects = (data.projects);
        //console.log(projects);
        projects.forEach(function(project){
           builtTemplate(project, 'projectTemplate', 'projectLocation');
            
        });
        $('.heartbeat').hide();
        
        
        var featuredProjects = projects.slice(0, 3);
        console.log(featuredProjects);
        featuredProjects.forEach(function(f){
            builtTemplate(f, 'featuredTemplate', 'featuredLocation');
        });
        
      
    });
    
    

}());