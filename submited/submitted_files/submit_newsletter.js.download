// Rev. 04/26/2021 include URL parameters and redirection

var newsLetterForm = document.getElementById("newsLetterForm");
var email = document.getElementById("email");
var submitNewsLetter = document.getElementById("submitNewsLetter");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


//var check_amount;

function afterSubmit(e, submitNewsLetter){
  e.preventDefault();

  if(email.value.match(mailformat))
  {
    var info = {
      email: email.value,

    };

    var url = "https://api.tradervise.com/v1/newsletter";


  //***************************
  //I MODIFIED .HTACCESS!!!!! in api.tradervise.com/ otherwise does not work CORS!!
  //**************************



    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //mode: 'no-cors',
      //cache: 'no-cache',
      //redirect: "follow",
      //headers: {
      //'Content-Type': 'application/json',
    //},
      body: JSON.stringify(info)
    })

    .then(response => response.json())
    .then(response => {
      console.log(response);

      //reset form?
      //buyForm.reset();
      var email = response['email'];
      var success = response['success'];
      if (success == true){
      alert(email + " has been successfully included in our NewsLetter");
      }else{
      alert(email + " was already subcribed.");
      }
      newsLetterForm.reset();

    })
    .catch(err => {
      console.log(err);
      console.log("Somenthing went wrong. I am here");
      setTimeout(function(){

      },3000);
    });


  }
  else
  {
  alert("Please, enter a valid email.");
  }





}
newsLetterForm.addEventListener("submit",afterSubmit);
