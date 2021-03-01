var images = $(".hidden");
var c = 0;
var audios = $(".sound");


//recognize the document is being clicked doc=page calls the function on the click event
$(document).click(function(e){
  console.log(e)
//where u click - setting variable to x and y
  var x = e.pageX
  var y = e.pageY
//calling the first image in the list of images
  var image = images[c]
//removing the hidden class name
image.className = ""
// manually setting the css to determin the position with each mouse click
image.style.top = y - image.clientHeight * 0.5 + "px"
image.style.left = x - image.clientWidth * 0.5 + "px"
//increases c each time by 1
  c++
//looks for sample 1 and plays it
  var audio = audios[c]
  audio.play()
})


// var images = $(".hidden2");
// var c = 0;
//
// $(document).click(function(e){
//   var x = e.pageX
//   var y = e.pageY
//   var image = images[c]
// image.className = ""
// image.style.top = y - image.clientHeight * 0.5 + "px"
// image.style.left = x - image.clientWidth * 0.5 + "px"
//   c++
//   document.getElementById("sample2").play()
// })
//
// var images = $(".hidden3");
// var c = 0;
//
// $(document).click(function(e){
//   var x = e.pageX
//   var y = e.pageY
//   var image = images[c]
// image.className = ""
// image.style.top = y - image.clientHeight * 0.5 + "px"
// image.style.left = x - image.clientWidth * 0.5 + "px"
//   c++
//   document.getElementById("sample1").play()
// })
