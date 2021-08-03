$(function () {
    let div_science = $('#div_science');
    let getUserName = localStorage.getItem('name'); $('#science_title').append("Bienvenido/a " + getUserName + "! Elegiste la categoria Science :) ");


    const loadData = async () => {
        try {
            const url = `https://trivia.willfry.co.uk/api/questions?categories=science&limit=20`
            const res = await fetch(url);
            const data = await res.json();
            listadoPreguntasScience(data)
            listadoRespuestasScience(data)
        } catch (err) {
            console.error(err);
        }
    };
    loadData();

    function listadoPreguntasScience(data) {
        let i = 0;
        data.map((questions) => {
            i++;
            let preguntas = [questions.question];

            preguntas = i + ". " + preguntas;

            let questions_sc = $('<p>')
                .attr("id", "pregunta" + i)
                .attr('class', 'p_question')
                .attr('style', 'display: none')
                .text(preguntas);

            $('#questions_science').append(questions_sc);


            $('.spinner').css('display', 'none');
            $('.next').show();

        })

        let a = 1;
        let show = $('.p_question')[a - 1];
        show.style = 'display: block';

        let sumar_q = function () {
            $('.next').on('click', function () {

                if (show.id != 'pregunta20') {
                    show.style = 'display: none';
                    $('.answer_question_' + a).attr('style', 'display: none');
                }
                a++;
                show = $('.p_question')[a - 1];
                show.style = 'display: block';

                $('.answer_question_' + a).attr('style', 'display: block');

            });
        }; $(sumar_q);
    };

    function listadoRespuestasScience(data) {
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
                $('#form-science').append(container_respuesta);
            });
        });
    };
});
