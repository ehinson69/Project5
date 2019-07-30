//**************************Treehouse Techdegree*****************************************/
//**************************Project 5 - Public API Requests******************************/
//**************************by Elizabeth Hinson******************************************/

//
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });