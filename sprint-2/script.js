// declared a variable to shorten the 
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

let mainForm = document.querySelector(".main__form-wrap");
// console.log(mainForm);
// to avoid the submit event to refresh the page
mainForm.addEventListener("submit",(eventForm => {
    eventForm.preventDefault();


}))

// creation of elements
let mainCommentContainer = document.createElement('div');
mainCommentContainer.className = 'main__comment-container';
newComments.appendChild(mainCommentContainer);

let mainFormImage = document.createElement('img');

