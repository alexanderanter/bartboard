 var BartBoard = function(container, text) {

   var boardText = "";
   var letter = 0;
   var intervalID;
   text = text || "You shall always pass the text argument to the BartBoard Constructor!";
   text = text.trim() + " ";
   var containerNode = document.getElementById(container);

   var template = document.querySelectorAll("#board template")[0];
   var div = document.importNode(template.content.firstElementChild, true);
  //  var div = document.createElement("div");
  //  div.classList.add("blackboard");

   div.addEventListener("mousedown", function(event){
     intervalID = setInterval(function(){
        boardText += text.charAt(letter);
        div.textContent = boardText;
        letter += 1;
        if(letter === text.length) {
          letter = 0;
        }
     }, 50);

   });
   document.addEventListener("mouseup", function(){
     clearInterval(intervalID);
   });


   containerNode.appendChild(div);

};

module.exports = BartBoard;
