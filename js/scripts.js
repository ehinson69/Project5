//**************************Treehouse Techdegree*****************************************/
//**************************Project 5 - Public API Requests******************************/
//**************************by Elizabeth Hinson******************************************/

//Grabbed the example provided.

$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=us',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        employeeList = data.results;
    }
});

let data;
let cardHTML = '';

cardHTML += `<div class="card">;
                <div class="card-img-container">;
                <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">;
            </div>;
            <div class="card-info-container">;
                <h3 id="name" class="card-name cap">first last</h3>
                <p class="card-text">email</p>
                <p class="card-text cap">city, state</p>
            </div>`;
$( ".gallery" ).append(cardHTML);

employeeList.forEach((user) => {
    const image = user.picture.large;
    const firstName = user.name.first;
    const lastName = user.last.name;
    const email = user.email;
    const city = location.city;
    const state = location.state;

});
