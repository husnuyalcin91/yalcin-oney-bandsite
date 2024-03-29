// declared a variable to shorten the creation process
let newComments = document.querySelector(".main__new-comments");
// console.log(newComments);

// declared an array so that the people, the date they commented and their comments can be later looped
let comments = [
    { name: 'Michael Lyons', 
    date: '12/18/2018',
    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'},
    { name: 'Gary Wong', 
    date: '12/12/2018',
    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He`s so talented! I wish I can ride like him one day so I can really enjoy myself!'},
    { name: 'Theodore Duncan',
    date: '11/15/2018', 
    comment: 'How can someone be so good!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He`s definitely my favorite ever!'}
];
// console.log(comments);

let mainForm = document.querySelector(".main__form");
// to avoid the submit event to refresh the page
mainForm.addEventListener("submit",(event => {
    event.preventDefault();

// to push a comment to be displayed on the website
    let inputName = event.target.name.value;
    comments.push(inputName);

    let inputComment = event.target.comment.value;
    comments.push(inputComment);

// to clear the NAME and COMMENT sections once a new comment is posted
    // newComments.innerHTML = (" ");

// for loop to push the existing comments
    for (let i = 0; i <= comments.length - 1; i++);
        comments.push(firstComment());
        comments.push(secondComment());
        comments.push(thirdComment());
}))

// creation of elements
// first new comment
function firstComment() {

    let mainCommentContainer = document.createElement('div');
    // mainCommentContainer.classList.add('main__comment-container');
    mainCommentContainer.setAttribute('class','main__comment-container');
    newComments.appendChild(mainCommentContainer);

    let mainFormImage = document.createElement('img');
    // mainFormImage.src = "assets/Images/Mohan.muruge.jpg";
    // mainFormImage.className = 'main__form-image';
    mainFormImage.classList.add('main__form-image');
    document.querySelector('.main__comment-container').appendChild(mainFormImage);

    let mainComment = document.createElement('div');
    // mainComment.className = 'main__comment';
    mainComment.classList.add('main__comment');
    mainComment.setAttribute('class','main__comment');
    document.querySelector('.main__comment-container').appendChild(mainComment);

    let mainCommentOneContainer = document.createElement('div');
    // mainCommentOneContainer.className = 'main__comment-one-container';
    // mainCommentOneContainer.classList.add('main__comment-one-container');
    mainCommentOneContainer.setAttribute('class','main__comment-one-container');
    document.querySelector('.main__comment').appendChild(mainCommentOneContainer);

    let mainCommentName = document.createElement('p');
    // mainCommentName.className = 'main__comment-name';
    // mainCommentName.classList.add('main__comment-name');
    mainCommentName.setAttribute('class','main__comment-name');
    mainCommentName.innerText = comments[0].name;
    document.querySelector('.main__comment-one-container').appendChild(mainCommentName);

    let mainCommentDate = document.createElement('p');
    // mainCommentDate.className = "main__comment-date";
    // mainCommentDate.classList.add('main__comment-date');
    mainCommentDate.setAttribute('class','main__comment-date');
    mainCommentDate.innerText = comments[0].date;
    document.querySelector('.main__comment-one-container').appendChild(mainCommentDate);

    let mainCommentComment = document.createElement('p');
    // mainCommentComment.className = 'main__comment-comment';
    // mainCommentComment.classList.add('main__comment-comment');
    mainCommentComment.setAttribute('class','main__comment-comment');
    mainCommentComment.innerText = comments[0].comment;
    document.querySelector('.main__comment-one-container').appendChild(mainCommentComment);
    }

    // firstComment();

// second new comment
function secondComment() {

    let mainCommentContainer = document.createElement('div');
    mainCommentContainer.className = 'main__comment-container';
    newComments.appendChild(mainCommentContainer);
    
    let mainFormImage = document.createElement('img');
    mainFormImage.className = 'main__form-image';
    // mainFormImage.setAttribute('src', 'assets/Images/Mohan.muruge.jpg');
    document.querySelector('.main__comment-container').appendChild(mainFormImage);
    
    let mainComment = document.createElement('div');
    mainComment.className = 'main__comment';
    document.querySelector('.main__comment-container').appendChild(mainComment);
    
    let mainCommentOneContainer = document.createElement('div');
    mainCommentOneContainer.className = 'main__comment-one-container';
    document.querySelector('.main__comment').appendChild(mainCommentOneContainer);
    
    let mainCommentName = document.createElement('p');
    mainCommentName.className = 'main__comment-name';
    mainCommentName.innerText = comments[1].name;
    document.querySelector('.main__comment-one-container').appendChild(mainCommentName);
    
    let mainCommentDate = document.createElement('p');
    mainCommentDate.className = "main__comment-date";
    mainCommentDate.innerText = comments[1].date;
    document.querySelector('.main__comment-one-container').appendChild(mainCommentDate);
    
    let mainCommentComment = document.createElement('p');
    mainCommentComment.className = 'main__comment-comment';
    mainCommentComment.innerText = comments[1].comment;
    document.querySelector('.main__comment-one-container').appendChild(mainCommentComment);
    }
    
    // secondComment();

// third new comment
function thirdComment() {

    let mainCommentContainer = document.createElement('div');
    mainCommentContainer.className = 'main__comment-container';
    newComments.appendChild(mainCommentContainer);
    
    let mainFormImage = document.createElement('img');
    mainFormImage.className = 'main__form-image';
    // mainFormImage.setAttribute('src', 'assets/Images/Mohan.muruge.jpg');
    document.querySelector('.main__comment-container').appendChild(mainFormImage);
    
    let mainComment = document.createElement('div');
    mainComment.className = 'main__comment';
    document.querySelector('.main__comment-container').appendChild(mainComment);
    
    let mainCommentOneContainer = document.createElement('div');
    mainCommentOneContainer.className = 'main__comment-one-container';
    document.querySelector('.main__comment').appendChild(mainCommentOneContainer);
    
    let mainCommentName = document.createElement('p');
    mainCommentName.className = 'main__comment-name';
    mainCommentName.innerText = comments[2].name;
    document.querySelector('.main__comment-one-container').appendChild(mainCommentName);
    
    let mainCommentDate = document.createElement('p');
    mainCommentDate.className = "main__comment-date";
    mainCommentDate.innerText = comments[2].date;
    document.querySelector('.main__comment-one-container').appendChild(mainCommentDate);
    
    let mainCommentComment = document.createElement('p');
    mainCommentComment.className = 'main__comment-comment';
    mainCommentComment.innerText = comments[2].comment;
    document.querySelector('.main__comment-one-container').appendChild(mainCommentComment);
    }
    
    // thirdComment();
    
    // console.log(newComments);