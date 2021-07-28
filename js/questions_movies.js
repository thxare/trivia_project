//window.addEventListener('load', 'movies.html');
$(function () {
    let div_movies = $('#questions_mov');
    let getUserName = localStorage.getItem('name'); $('#movies_title').append("Bienvenid@ " + getUserName + "! Elegiste la categoría Movies :) ");
    bringMovies()
        .then(res => res.json())
        .then(data => {
            listadoPreguntasMovies(data);
            listadoRespuestas(data);

            //console.log(data)
        })
        .catch(function (e) {
            console.log("Hubo un problema: " + e.message);
        });


    function bringMovies() { return fetch('https://trivia.willfry.co.uk/api/questions?categories=movies&limit=20') };

    function listadoPreguntasMovies(data) {
        data.map((questions, i) => {
            i++;
            let preguntas = [questions.question];

            preguntas = i + ". " + preguntas;

            let questions_m = $('<p>')
                .attr("id", "pregunta" + i)
                .attr('class', 'p_question')
                .attr('style', 'display: none')
                .text(preguntas);

            $('#questions_mov').append(questions_m);


            $('.spinner').css('display', 'none');
            $('.next').show();

        })

        let show = $('.p_question')[0];
        show.style = 'display: inline';
        var a = 0;
        var sumar_q = function () {
            $('#next_movie').on('click', function () {            
                show.style= 'display: none';
                a++;
                show = $('.p_question')[a];
                show.style = 'display: inline';
            });
        }; $(sumar_q);

        console.log(show);
    };

    function listadoRespuestas(data) {
        data.map((questions) => {
            let respuestas_i = [questions.incorrectAnswers][0].slice(0, 3);
            let respuesta_c = [questions.correctAnswer][0];
            let respuestas_ordenadas = respuestas_i.push(respuesta_c);

            respuestas_i.sort(() => {
                return Math.random() - 0.5;
            });

            respuestas_i.forEach(element => {

                console.log(element);
            });

            console.log(respuestas_i);
        });
    }
});
