/*
alert("script2.js");
console.log("Nous sommes dans script2.js");
console.log("Nous pouvons maintenant faire ce que l'on veut !");
console.log("C'est fait, nous sommes toujours dans script2.js");
*/

var nick;
var proceed = true;

while(proceed)
{
  nick = prompt("Veuillez entrer votre Pseudonyme : ");
  if(nick)
  {
    console.log("Le Pseudonyme est : " + nick);
    proceed = false;
  }
  else if (nick == false)
  {
    while(proceed == false)
    {
      nick = prompt("Veuillez entrer votre Pseudonyme : ");
      alert(nick);
    }
    proceed = false;
  }

  console.log(nick);
}

function fonction(test)
{
  test +=1
}

function showMsg(msg)
{
  alert(msg);
  console.log(msg);
}

showMsg("Bonjour, vous devez maintenant résoudre cet easter egg !");
