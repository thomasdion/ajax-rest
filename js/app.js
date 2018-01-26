// $(document).ready(function() {
jQuery(document).ready(function($) {
    console.log("sucess");
    var title = document.getElementById('btn1').innerHTML;
    $("#btn1").click(function(){
      if(title=="Load Rest") {
        load_rest("rest_api");
        title = "Unload Rest";
      }else {
        title="Load Rest";
        document.getElementById('rest-table').innerHTML = "";
      }
      document.getElementById('btn1').innerHTML = title;
    })
});

function load_rest(api) {
  // console.log("success");
  document.getElementById('rest-table').innerHTML = "Loading my rest....";
  jQuery.ajax({
    url:'http://localhost/test2/api/awards',
    type:"GET",
    // headers: {'Authorization': "Basic " + btoa("username" + ":" + "password")},
    dataType:'json',
    cache:false,
    success:function(result="") {
      records = result.toString().trim().length;
      let text = "";
      if(records!=0){
        text+= "<table><tr><th>Name</th><th>Url</th></tr>"
        for(let award of result) {
          text += "<tr><td>" + award['name'] + "</td><td>" + award['url'] + "</td></tr>";
        }
        text+="</table>"
        document.getElementById('rest-table').innerHTML = text;
        // alert(result.length);
      }
    }
  });

}
