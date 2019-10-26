// variables
// retrieved the api key from the browser
let api = 'https://project-1-api.herokuapp.com';
// apiKey retrieved using the browser
let apiKey = 'aa9aa8c6-78b6-4300-8414-e8c9e176d654';

// axios - get, post
getComments = () => {
    axios.get(`${api}/comments?api_key=${apiKey}`)
    .then(result => {
        // console.log(result);
        const defaultComments = result.data;
        console.log(defaultComments)
        defaultComments.forEach( comm => {
            displayComments(comm)
        })
    })
    .catch (error => {
        console.log(error);
    })
};

getComments();

displayComments = (object) => {
    
}

// // sprint 2 below here



// // declared a variable to shorten the creation process
// let newComments = document.querySelector('.main__new-comments');
// // console.log(newComments);

// // declared an array so that the people, the date they commented and their comments can be later looped
// let oldComments = [
//     { name: 'Michael Lyons', 
//     date: '12/18/2018',
//     comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'},
//     { name: 'Gary Wong', 
//     date: '12/12/2018',
//     comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He`s so talented! I wish I can ride like him one day so I can really enjoy myself!'},
//     { name: 'Theodore Duncan',
//     date: '11/15/2018', 
//     comment: 'How can someone be so good!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He`s definitely my favorite ever!'}
// ];
// // console.log(oldComments);

// let mainForm = document.querySelector(".main__form");
// // to avoid the submit event to refresh the page
// mainForm.addEventListener("submit",(event => {
//     event.preventDefault();
// // for loop to create the elements & push the existing comments
// // const displayComments = () => {
//     for (let i = 0; i <= comments.length - 1; i++) {
//         let mainCommentContainer = document.createElement('div');
//         mainCommentContainer.classList.add('main__comment-container');
//         newComments.appendChild(mainCommentContainer);

//         let mainFormImage = document.createElement('img');
//         // mainFormImage.src = "";
//         mainFormImage.className = 'main__form-image';
//         document.querySelector('.main__comment-container').appendChild(mainFormImage);

//         let mainComment = document.createElement('div');
//         mainComment.className = 'main__comment';
//         document.querySelector('.main__comment-container').appendChild(mainComment);

//         let mainCommentOneContainer = document.createElement('div');
//         mainCommentOneContainer.className = 'main__comment-one-container';
//         document.querySelector('.main__comment').appendChild(mainCommentOneContainer);

//         let mainCommentName = document.createElement('p');
//         mainCommentName.className = 'main__comment-name';
//         mainCommentName.innerText = comments[i].name;
//         document.querySelector('.main__comment-one-container').appendChild(mainCommentName);

//         let mainCommentDate = document.createElement('p');
//         mainCommentDate.className = 'main__comment-date';
//         mainCommentDate.innerText = comments[i].date;
//         document.querySelector('.main__comment-one-container').appendChild(mainCommentDate);

//         let mainCommentComment = document.createElement('p');
//         mainCommentComment.className = 'main__comment-comment';
//         mainCommentComment.innerText = comments[i].comment;
//         document.querySelector('.main__comment-one-container').appendChild(mainCommentComment);
//     // } // closing curly brace of displayComments function
// };
//     // to push a comment to be displayed on the website
//         let nameInput = event.target.user_name;
//         let nameValue = nameInput.value;
//         let commentInput = event.target.comment_name;
//         let commentValue = commentInput.value;
//         comments.push(nameInput, commentInput);

//     // to clear the NAME and COMMENT sections once a new comment is posted
    
        
// }))}