
'use strict'
// function bringMovies() {
//     fetch('https://trivia.willfry.co.uk/api/questions?categories=movies&limit=20')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         });
// };
function bringMusic() {
    fetch('https://trivia.willfry.co.uk/api/questions?categories=music&limit=20')
        .then(res => res.json())
        .then(data => {console.log(data)});
};

function bringScience() {
    fetch('https://trivia.willfry.co.uk/api/questions?categories=science&limit=20')
        .then(res => res.json())
        .then(data => {console.log(data)});
};
function bringHistory() {
    fetch('https://trivia.willfry.co.uk/api/questions?categories=history&limit=20')
        .then(res => res.json())
        .then(data => {console.log(data)});
};
var category = $("#category");
function saveUserName(){let name = $('#input_name').val();localStorage.setItem('name', name);}
function categorySelected() {if (category.val() == 'movies') {location.href = 'movies.html';}else if (category.val() == 'music') {location.href = 'music.html';}else if (category.val() == 'science') {location.href = 'science.html';}else if (category.val() == 'history') {location.href = 'history.html';}};
let boton = $('#btn_start'); boton.on("click", function () {categorySelected(); saveUserName();});