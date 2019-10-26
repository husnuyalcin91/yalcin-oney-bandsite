//to-do list
//(1) replace the timestamp values with actual dates
//(2) prevent axios.post comment from posting everytime the page reloads
//(3) ensure preventDefault and posting a comment through the website form works
//(4) make sure the last comment displays at the top
//(5) replace html shows with js shows according to the data provided by the api

// variables
let api = 'https://project-1-api.herokuapp.com';
// apiKey retrieved using the browser
let apiKey = 'aa9aa8c6-78b6-4300-8414-e8c9e176d654';

// dates
let d = new Date(1530744338878);
new Date(`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`);
console.log(d);

// axios - get comments
getComments = () => {
    axios.get(`${api}/comments?api_key=${apiKey}`)
    .then(result => {
        // console.log(result);
        const defaultComments = result.data;
        console.log(defaultComments)
        defaultComments.forEach( item => {
            displayComments(item)
        })
    })
    .catch (error => {
        console.log(error);
    })
};

getComments();

displayComments = (object) => {
    // declare the section variable
    let mainNewComments = document.querySelector(".main__new-comments");

    // creation of the main comment container
    let mainCommentContainer = document.createElement("div");
    mainCommentContainer.classList.add('main__comment-container');
    mainNewComments.appendChild(mainCommentContainer);

    // creation of the form image
    let mainFormImage = document.createElement("img");
    mainFormImage.setAttribute('src', 'assets/Images/Mohan-muruge.jpg');
    mainFormImage.classList.add('main__form-image');
    mainCommentContainer.appendChild(mainFormImage);

    // creation of the comment div
    let mainComment = document.createElement("div");
    mainComment.classList.add('main__comment');
    mainCommentContainer.appendChild(mainComment);

    // creation of the secondary comment container
    let mainCommentOneContainer = document.createElement("div");
    mainCommentOneContainer.classList.add('main__comment-one-container');
    mainComment.appendChild(mainCommentOneContainer);

    // creation of the commentator name
    let mainCommentName = document.createElement("p");
    mainCommentName.innerText = object.name;
    mainCommentName.classList.add('main__comment-name');
    mainCommentOneContainer.appendChild(mainCommentName);

    // creation of the comment date
    let mainCommentDate = document.createElement("p");
    mainCommentDate.innerText = object.timestamp;
    mainCommentDate.classList.add('main__comment-date');
    mainCommentOneContainer.appendChild(mainCommentDate);

    // creation of the comment
    let mainCommentComment = document.createElement("p");
    mainCommentComment.innerText = object.comment;
    mainCommentComment.classList.add('main__comment-comment');
    mainComment.appendChild(mainCommentComment);
};

// axios - post comments
// axios.post(`${api}/comments?api_key=${apiKey}`, {
//     "name": "Arthur Shelby",
//     "comment": "Peaky Blinders were thoroughly entertained. Keep it up!"
// })
// .then(() => {
    
// })
// .get(`${api}/comments?api_key=${apiKey}`)

// axios get - showdates
getShowDates = () => {
    axios.get(`${api}/showdates?api_key=${apiKey}`)
    .then(response => {
        // console.log(response);
        const showDates = response.data;
        // console.log(showDates)
        showDates.forEach( show => {
            shows(show)
        })
    })
    .catch (error => {
        console.log(error);
    })
};

getShowDates();

shows = (object) => {

}


// // sprint 2 below here

// let mainForm = document.querySelector(".main__form");
// // to avoid the submit event to refresh the page
// mainForm.addEventListener("submit",(event => {
//     event.preventDefault();