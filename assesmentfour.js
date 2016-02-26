
function openDoor(password){
  var correctPassword = "OpenSesame"
  if (password === correctPassword){
    var output = "The door is open.";
  }else{
    output = "You fall to your doom.";
  }

  return output
}

function sandwich(ingredients){
  console.log(ingredients[0]);
  console.log(ingredients[1]);
  console.log(ingredients[2]);
  console.log(ingredients[3]);
  console.log(ingredients[0]);

}

openDoor("open")
openDoor("OpenSesame")
var arr = ["bread", "cheese", "ham", "mustard"]
sandwich(arr)