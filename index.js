
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


function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


function ChangeText(){
  var sel = document.getElementById('demo');
  var selects = sel.options[sel.selectedIndex].value;
  console.log(selects );
}
ChangeText();
