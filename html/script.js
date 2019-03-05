// JavaScript File
/*global $*/
var songnames = ["Lucky You"];
var artistnames = ["Eminem, Joyner Lucas"];
var imagelinks = ["https://www.gannett-cdn.com/presto/2018/08/31/PDTF/d034deae-3d90-4020-a2b3-ff5e18a5dab0-kamikaze.jpg?crop=679,382,x1,y98&width=3200&height=1680&fit=bounds"];
var songlinks = ["https://www.youtube.com/watch?v=eSxkp4rGzt8"];
$("#add").click(function() {
    $("#songlist").html("");
    $("#artistlist").html("");
    $("#imagelist").html("");
    $("#videolist").html("");
    songnames.push($("#Song").val());
    artistnames.push($("#Artist").val());
    imagelinks.push($("#Image").val());
    songlinks.push($("#Video").val());
    loadsongs();
});
loadsongs();
function loadsongs() {
    songnames.forEach(function(name) {
        $("#songlist").append("<div class='name'>"+name+"</div>");
    });
    artistnames.forEach(function(artist) {
        $("#artistlist").append("<div class='artist'>"+artist+"</div>");
    });
    imagelinks.forEach(function(image) {
        $("#imagelist").append("<div class='image'>"+"<img src='"+image+"'>"+"</div>");
    });
    songlinks.forEach(function(song) {
        $("#videolist").append("<div class='video'>"+"<a target='_blank' href='"+song+"'>"+"Song</a>"+"</div>");
    });
}
