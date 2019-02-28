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
readTextFile("data.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    var para = document.getElementById('para');
    para.innerHTML = "THE FIRST WEBSITE IS"+" "+data[0].websiteName+" AND ITS CONTACT IS  "+data[0].contact;

});
