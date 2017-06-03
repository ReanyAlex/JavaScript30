var input = document.querySelectorAll("input");
let firstBox;
let secondBox;

input.forEach(trackIndex)


function trackIndex(elem,index){
  elem.addEventListener("click", function(a) {
    if (event.shiftKey) {
      if (firstBox === undefined) {
        firstBox = index
        return
      }else if(secondBox === undefined){
        secondBox = index
      }
    }
    checkBoxes()
  });
}

function checkBoxes() {
  for (var i = firstBox+1 ; i < secondBox; i++) {
    input[i].checked = true;
    }
}
