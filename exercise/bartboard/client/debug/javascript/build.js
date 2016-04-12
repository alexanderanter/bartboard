(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var BartBoard = require("./BartBoard");

new BartBoard("board", "I shall not pollute the global scope!");
new BartBoard("board");

},{"./BartBoard":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiYXJ0Ym9hcmQvY2xpZW50L3NvdXJjZS9qcy9CYXJ0Qm9hcmQuanMiLCJiYXJ0Ym9hcmQvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIHZhciBCYXJ0Qm9hcmQgPSBmdW5jdGlvbihjb250YWluZXIsIHRleHQpIHtcclxuXHJcbiAgIHZhciBib2FyZFRleHQgPSBcIlwiO1xyXG4gICB2YXIgbGV0dGVyID0gMDtcclxuICAgdmFyIGludGVydmFsSUQ7XHJcbiAgIHRleHQgPSB0ZXh0IHx8IFwiWW91IHNoYWxsIGFsd2F5cyBwYXNzIHRoZSB0ZXh0IGFyZ3VtZW50IHRvIHRoZSBCYXJ0Qm9hcmQgQ29uc3RydWN0b3IhXCI7XHJcbiAgIHRleHQgPSB0ZXh0LnRyaW0oKSArIFwiIFwiO1xyXG4gICB2YXIgY29udGFpbmVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcik7XHJcblxyXG4gICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2JvYXJkIHRlbXBsYXRlXCIpWzBdO1xyXG4gICB2YXIgZGl2ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkLCB0cnVlKTtcclxuICAvLyAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgLy8gIGRpdi5jbGFzc0xpc3QuYWRkKFwiYmxhY2tib2FyZFwiKTtcclxuXHJcbiAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICBpbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICBib2FyZFRleHQgKz0gdGV4dC5jaGFyQXQobGV0dGVyKTtcclxuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBib2FyZFRleHQ7XHJcbiAgICAgICAgbGV0dGVyICs9IDE7XHJcbiAgICAgICAgaWYobGV0dGVyID09PSB0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgbGV0dGVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgfSwgNTApO1xyXG5cclxuICAgfSk7XHJcbiAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcclxuICAgfSk7XHJcblxyXG5cclxuICAgY29udGFpbmVyTm9kZS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmFydEJvYXJkO1xyXG4iLCJ2YXIgQmFydEJvYXJkID0gcmVxdWlyZShcIi4vQmFydEJvYXJkXCIpO1xyXG5cclxubmV3IEJhcnRCb2FyZChcImJvYXJkXCIsIFwiSSBzaGFsbCBub3QgcG9sbHV0ZSB0aGUgZ2xvYmFsIHNjb3BlIVwiKTtcclxubmV3IEJhcnRCb2FyZChcImJvYXJkXCIpO1xyXG4iXX0=
