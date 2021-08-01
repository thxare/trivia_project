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
        let i = 0;
        data.map((questions) => {
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

        let a = 1;
        let show = $('.p_question')[a - 1];
        show.style = 'display: block';
        
        let sumar_q = function () {
            $('#next_movie').on('click', function () {
                show.style = 'display: none';
                $('.answer_question_' + a).attr('style', 'display: none');
                
                a++;
                show = $('.p_question')[a - 1];
                show.style = 'display: block';

                $('.answer_question_' + a).attr('style', 'display: block');
                
            });
        }; $(sumar_q);

        //console.log(show);
    };

    function listadoRespuestas(data) {
        let j;
        let i = 0;
        data.map((questions) => {
            i++;
            let respuestas_i = [questions.incorrectAnswers][0].slice(0, 3);
            let respuesta_c = [questions.correctAnswer][0];
            respuestas_i.push(respuesta_c);
            respuestas_i.sort(() => {
                return Math.random() - 0.5;
            });

            console.log(respuestas_i);
            j = 0
            respuestas_i.forEach(element => {
                j++;
                 let respuesta = $('<input>')
                     .attr('type', 'radio')
                     .attr("id", "respuesta_" + i + "_" + j)
                     .attr("name", "respuesta_" + i)
                     .attr('value', element);
                
                let container_respuesta = $('<label>')
                    .append(respuesta)
                    .attr('style', 'display: none')
                    .attr('class', 'p_answer answer_question_' + i)
                    .append(element);
                
                if (i == 1) {
                    container_respuesta.attr('style', 'display: block');
                }

                $('#form').append(container_respuesta);

            //     //console.log(element);
            });

            // if($('[value = "1"]')){
            //     $('#form').append(respuesta);
               
            // }

        });


        ////let correcto = respuestas_i.find(respuesta_c);
        //if (typeof correcto !== 'function') {
        //   return;
        //} correcto();
        //console.log();
        //});

        //let show_a = $('.p_answer')[0];
        //show_a.style = 'display: inline';

        // let b = 0;

        //    / let sumar_a = function () {
        //    / $('#next_movie').on('click', function () {
        //show_a.style = 'display: none';
        //b++;
        //show_a = $('.p_answer')[b];
        //show_a.style = 'display: inline';
        //});

    }; //$(sumar_a);
    //};
});
