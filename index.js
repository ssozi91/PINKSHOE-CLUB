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
rreadTextFile("data.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    var para = document.getElementById('para');
    para.innerHTML = "THE FIRST WEBSITE IS"+" "+data[0].websiteName+" AND ITS CONTACT IS  "+data[0].contact;

});

// var obj, dbParam, xmlhttp, myObj, x, txt = "";
// obj = { table: "customers", limit: 20 };
// dbParam = JSON.stringify(obj);
// xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     myObj = JSON.parse(this.responseText);
//     txt += "<select>"
//     for (x in myObj) {
//       txt += "<option>" + myObj[x].name;
//     }
//     txt += "</select>"
//     document.getElementById("demo").innerHTML = txt;
//   }
// };
// xmlhttp.open("POST", "json_demo_db_post.php", true);
// xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xmlhttp.send("x=" + dbParam);



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
