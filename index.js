
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("words.json", function(text){
  var words = JSON.parse(text);
  console.log("ray1");
  console.log(words);
  var txt="";
    txt += "<select>"
    words.forEach(function(element){
      txt += "<option>" + element.keyword;
    })
    txt += "</select>"
    document.getElementById("demo").innerHTML = txt;

});
//usage:
readTextFile("temp.json", function(text){
    var data = JSON.parse(text);
    console.log("ray");
    console.log(data);
      data.forEach(function(element){
      console.log(element.List);
      var newLine = document.createElement("p");
      var para = document.createElement("a");
      var att = document.createAttribute("href");
      att.value = element.List;
      para.setAttributeNode(att);
      var node = document.createTextNode(element.List);
      para.appendChild(node);
      newLine.appendChild(para);
      var parent = document.getElementById("div1");
      parent.appendChild(newLine);
    });
  });


function choices() {
  var sel = document.getElementById("demo");
  var selects = sel.options[sel.selectedIndex].text;
  var obj = {
    selectedOption:selects
  }
  console.log(obj.selectedOption)
var selectTjson = JSON.stringify(obj);

var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "jsonRequestURL", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(selectTjson);
}
