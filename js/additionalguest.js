var guests = 1;
function addGuest(){
  if(guests < 10){
    guests += 1;
    var currGuest = "form" + guests;
    document.getElementById(currGuest).style.display='block';
  }
}

function removeGuest(){
  if(guests > 1){
    var currGuest = "form" + guests;
    document.getElementById(currGuest).style.display='none';
    guests -= 1;
  }
}
