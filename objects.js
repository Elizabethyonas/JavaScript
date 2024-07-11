// intializing the object with its attributes
var tutorial = {
    "topic": "javaScript",
    "trainer": "Elizabet",
    "mode": "online"
};

// call the attributes of the object
console.log("Topic : " + tutorial.topic);
console.log("Trainer : " + tutorial.trainer);
console.log("Mode : " + tutorial.mode);

// using for loop to iterrate over the attributs of the object
var txt = "";
var x;
for (x in tutorial) {
    txt += tutorial[x] + " , ";
}
console.log(txt)