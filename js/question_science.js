$(function () {
    let div_science = $('#div_science');
    let getUserName = localStorage.getItem('name'); $('#science_title').append("Bienvenido/a " + getUserName + "! Elegiste la categoria Science :) ");

    bringScience()
        .then(res => res.json())
        .then(data => {
            listadoPreguntasScience(data);
            console.log(data)
        });

    function bringScience() { return fetch('https://trivia.willfry.co.uk/api/questions?categories=science&limit=20') };

    function listadoPreguntasScience(data) {
        data.map((questions, i) => {
            i++;
            let pregunta = document.createElement('p');
            pregunta.innerHTML = i + ". " + questions.question;
            div_science.append(pregunta);
            $('.loading').css("display", "none");
            $('.next').show();
        });
    };

})
