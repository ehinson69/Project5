//**************************Treehouse Techdegree*****************************************/
//**************************Project 5 - Public API Requests******************************/
//**************************by Elizabeth Hinson******************************************/

let employees = [];
let cardHTML = '';
//Grabbed the example provided.
$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=us',
    dataType: 'json',
    success: function (data) {
        employees = data.results;
    }
})

    .done(() => {
        employees.forEach((employee) => {
            cardHTML += `<div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${employee.picture.medium}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
                    <p class="card-text">${employee.email}</p>
                    <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
                </div>
            </div>`
        })
        $(".gallery").append(cardHTML);
   
            
        $(".modal-container").show();
        $("#modal-close-btn").on("click", function() {
            $(".modal-container").hide();
        })

        //Add a click event for the modal prev
        //Decrement the currentIndex
        //If the currentIndex is less than zero, reset it to zero
        $("#modal-prev").on("click", function() {
            currentIndex = parseInt(currentIndex) - 1;
            if(currentIndex < 0) {
                currentIndex = 0;
            };
            populateModalPopup(currentIndex);
        })

        // Add a click event for the modal next
        // Increment the currentIndex
        // If currentIndex is greater than 11, reset it to 11 i.e.
        // the maximum number of random users
        $("#modal-next").on("click", function() {
            currentIndex = parseInt(currentIndex) + 1;
            if (currentIndex > 11) {
                currentIndex = 11;
            };
            populateModalPopup(currentIndex);
        })

    });

        // Gives the modal a previous and next functionality. Extra Credit.
        function createModalBtnContainer() { 
            let modalBtnContainer=
            `<div class="modal-btn-container">
                        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                        <button type="button" id="modal-next" class="modal-next btn">Next</button>
                    </div>`;
            $(".modal-container").append(modalBtnContainer);
            $(".modal-btn-container").show();
            $(".modal-container").hide();
        }

    //Function to populate the modal popup
    function populateModalPopup(contacts) {
        $(".modal-img")[0].src = employee[contacts].picture.medium;
        $("#name").text(employee[contacts].name.first + " " + employee[contacts].name.last);
        $(".modal-text")[0].innerText = employee[contacts].email;
        $(".modal-text")[1].innerText = employee[contacts].location.city;
        $(".modal-text")[2].innerText = employee[contacts].cellular;
        $(".modal-text")[3].innerText = employee[contacts].location.street + ", " +
            employee[contacts].location.city + ", " +
            employee[contacts].location.state + " " +
            employee[contacts].location.postalcode;

        let DOB = employee[contacts].dob.date.split("T");
        let DOBArr = DOB[0].split("-");
        let year = DOBArr[0];
        let month = DOBArr[1];
        let day = DOBArr[2];
        $(".modal-text")[4].innerText = "Birthday: " + month + "/" + day + "/" + year;
    }

    employees.forEach((employee) => {
        employeesModal += `<div class="modal-container">
                            <div class="modal">
                                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                            </div>
                            <div class="modal-info-container">
                                <img class="modal-img" src="${employee.picture.medium}" alt="profile picture"></img>
                                    <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                                    <p class="modal-text">${employee.email}</p>
                                    <p class="modal-text cap">${employee.location.city}</p>
                                    <hr>
                                    <p class="modal-text">(555) 555-5555</p>
                                    <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                                    <p class="modal-text">Birthday: 10/21/2015</p>
                            </div>
                        </div>`
    });

    $(".body").append(employeeModal);
    gallery.after(modalPopup);
    

    //Gives the search box functionality.
    function createSearch() { 
        let search =
            `<form action="#" method="get">
                <input type="search" id="search-input" class="search-input" placeholder="Search...">
                <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
            </form>`;
        $(".search-container").append(search);
    }

    //listen for clicks on a card; use name to get detailed data
        // Add a click event for the search submit button
        $("#search-submit").on("click", function() {
            let searchVal = $("#search-input").val().toLowerCase();
            $(".card").hide();
            for(let s = 0; s < $(".card").length; s++) {
                if($("#name" + s)[0].innerText.toLowerCase().indexOf(searchVal) != -1) {
                    $(".card")[s].style.display = "block";
                }
            }
        })
   