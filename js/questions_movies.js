//window.addEventListener('load', 'movies.html');
$(function () {
    let div_movies = $('#questions_mov');
    let getUserName = localStorage.getItem('name'); $('#movies_title').append("Bienvenid@ " + getUserName + "! Elegiste la categoría Movies :) ");
    //console.log(getUserName)
    bringMovies()
        .then(res => res.json())
        .then(data => {
            listadoPreguntasMovies(data);
            //listadoRespuestasMovies(data)
            console.log(data)
        });
    function bringMovies() { return fetch('https://trivia.willfry.co.uk/api/questions?categories=movies&limit=20') };

    function listadoPreguntasMovies(data) {
        data.map((questions, i) => {
            i++;
            //let pregunta = document.createElement('p');    
            //let pregunta = i + ". " + questions.question; 
            const preguntas = [questions.question];
            let respuestas_i = [questions.incorrectAnswers][0].slice(0, 3);
            let respuesta_c = [questions.correctAnswer][0];
            
            let pregunta_i = i + ". " + preguntas;

            let respuestas_ordenadas = respuestas_i.push(respuesta_c);

            respuestas_i.sort(() => {
                return Math.random() - 0.5;
            });

            console.log(pregunta_i);
            console.log(respuestas_i);
            //let sl =respuestas_i[0].slice(0,3);
            //console.log(preguntas);
            //console.log(respuestas_i);
            //console.log(respuesta_c)
            //$('#question_list').append('<li>' + pregunta_i +'<br>' +respuestas_i+ '</li>').css("list-style", "none");
            //div_movies.append(pregunta); 
            $('.spinner').css('display', 'none');
            $('.next').show();
        });
    };

    // function listadoRespuestasMovies(data){
    //     data.map((answers,i) =>{
    //         i++;
    //         let respuesta = document.createElement('p');
    //         respuesta.innerHTML= i + ". " + answers.incorrectAnswers;
    //         div_movies.append(respuesta);
    //     })
    // }

});
