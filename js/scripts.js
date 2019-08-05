//**************************Treehouse Techdegree*****************************************/
//**************************Project 5 - Public API Requests******************************/
//**************************by Elizabeth Hinson******************************************/

//Grabbed the example provided.	
$.ajax({
        url: 'https://randomuser.me/api/?results=12&nat=us',
        dataType: 'json',
        success: function (data) {
            employees = data.results;
        }
})

    //set variable for user results
    //loops through each employee to get their information
    .then(function (users) {
        data = users.results;
        data.forEach(employees => {
            // variables for employees information
            const image = employees.picture.medium;
            const firstName = employees.name.first;
            const lastName = employees.name.last;
            const email = employees.email;
            const city = employees.location.city;
            const state = employees.location.state;

            //create variable for employee profile and set it to the div card
            const profile = `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${image}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
                    <p class="card-text">${email}</p>
                    <p class="card-text cap">${city}, ${state}</p>
                </div>
            </div>`
            // append profile to gallery id
            $("#gallery").append(profile);
        })
    });

    //variable for other detailed information that will appear when employees are selected
    function display(i) {
        const image = data[i].picture.large;
        const firstName = data[i].name.first;
        const lastName = data[i].name.last;
        const email = data[i].email;
        const city = data[i].location.city.toUpperCase();
        const state = data[i].location.state.toUpperCase();
        const phone = data[i].phone;
        const street = data[i].location.street.toUpperCase();
        const birthMonth = data[i].dob.date.slice(5, 7);
        const birthDate = data[i].dob.date.slice(8, 10);
        const birthYear = data[i].dob.date.slice(0, 4);

    //adds html element of information to the popup window
    let modal = 
            `<div class="modal-container">
                <div class="modal">
                <button type="button" id ="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class ="modal-img" src="${image}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${firstName} ${lastName}</h3> 
                    <p class="modal-text">${email}</p> 
                    <p class="modal-text cap">${city}</p> 
                    <hr>
                    <p class="modal-text">${phone}</p> 
                    <p class="modal-text">${street}, ${city}, ${state} 97204</p> 
                    <p class="modal-text">Birthday: ${birthMonth}/${birthDate}/${birthYear}</p> 
                </div>
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>`

    //Gives the modal a previous and next functionality. Extra Credit.
    let modalBtnContainer =
        `<div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>`;
    $(".modal-container").append(modalBtnContainer);
    $(".modal-btn-container").show();
    $(".modal-container").hide();
    $("body").append(modal);

    //appends html to popup window
    $("#modal-close-btn").on("click", function() {
        $(".modal-container").remove();
    })

    $("#modal-next").on("click", function(index) {
        let next;
        if(index == employees.length - 1) {
            next = 0
        } else {
            next = index + 1;
        }
    })

    // Add a click event for the modal next
    $("#modal-prev").on("click", function(index) {
        let prev;
        if(index == employees.length + 1) {
            prev = 0
        } else {
            prev = index - 1;
        }
    })
}

    //when clicked on employee card, modal container appears
    $('#gallery').on("click", ".card", function () {
        i = ($(this).index())
        display(i);
    })