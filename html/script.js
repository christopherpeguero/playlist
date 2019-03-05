// JavaScript File
/*global $*/
var songnames = [];
var artistnames = [];
var imagelinks = [];
var songlinks = [];
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
