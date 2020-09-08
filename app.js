
const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
    {
      pregunta: "1. Cuál es la capital de Irán?",
      respuestas: {
        a: "Bagdad",
        b: "Teherán",
        c: "Islamabad"
      },
      respuestaCorrecta: "b"
    },
    {
      pregunta: "2. Cuál es la capital de Irak?",
      respuestas: {
        a: "Kuwait",
        b: "Dubai",
        c: "Bagdad"
      },
      respuestaCorrecta: "c"
    },
    {
      pregunta: "3. Cuál es la capital de Noruega?",
      respuestas: {
        a: "Roma",
        b: "Copenague",
        c: "Estocolmo",
        d: "Oslo"
      },
      respuestaCorrecta: "d"
    },
    {
      pregunta: "4. Cuál es la capital de Serbia?",
      respuestas: {
        a: "Belgrado",
        b: "Zagreb",
        c: "Kabul"
      },
      respuestaCorrecta: "a"
    },
    {
        pregunta: "5. Cuál es la capital de Australia?",
        respuestas: {
            a: "Sidney",
            b: "Zurich",
            c: "Canberra"
      },
      respuestaCorrecta: "c"
    },
    {
      pregunta: "6. Cuál es la capital de Canadá?",
      respuestas: {
        a: "Toronto",
        b: "Montreal",
        c: "Ontario"
      },
      respuestaCorrecta: "c"
    },
    {
      pregunta: "7. Cuál es la capital de Vietnam?",
      respuestas: {
        a: "Puket",
        b: "Ho Chin Ming",
        c: "Pan Lao Kung"
      },
      respuestaCorrecta: "b"
    },
    {
      pregunta: "8. Cuál es la capital de China?",
      respuestas: {
        a: "Shangai",
        b: "Pekín",
        c: "Seul"
      },
      respuestaCorrecta: "b"
    },
    {
      pregunta: "9. Cuál es la capital de Pakistan?",
      respuestas: {
        a: "Islamabad",
        b: "Kuwait",
        c: "Kabul"
      },
      respuestaCorrecta: "a"
    },
    {
      pregunta: "10. Cuál es la capital de Marruecos?",
      respuestas: {
        a: "Casablanca",
        b: "Rabat",
        c: "Kabul"
      },
      respuestaCorrecta: "b"
    },
    {
        pregunta: "11. Cuál es la capital de colombia?",
        respuestas: {
          a: "Buenos aires",
          b: "Bogota",
          c: "Santiago De chile"
        },
        respuestaCorrecta: "b"
      },
      {
        pregunta: "12. Cuál es la capital de Bolivia?",
        respuestas: {
          a: "Sucre",
          b: "La paz",
          c: "Lima"
        },
        respuestaCorrecta: "a"
      },
      {
        pregunta: "13. Cuál es la capital de brasil?",
        respuestas: {
          a: "Sao Paulo",
          b: "Rio de janeiro",
          c: "Brasilia"
        },
        respuestaCorrecta: "c"
      },
      {
        pregunta: "14. Cuál es la capital de España?",
        respuestas: {
          a: "Valladolid",
          b: "Madrid",
          c: "Barcelona"
        },
        respuestaCorrecta: "b"
      },
      {
        pregunta: "15. Cuál es la capital de Polonia?",
        respuestas: {
          a: "Varsovia",
          b: "Torun",
          c: "Brzezinka"
        },
        respuestaCorrecta: "a"
      },
      {
        pregunta: "16. Cuál es la capital de portugal?",
        respuestas: {
          a: "Lisboa",
          b: "Oporto",
          c: "Aveiro"
        },
        respuestaCorrecta: "a"
      },
      {
        pregunta: "17. Cuál es la capital de Rumania?",
        respuestas: {
          a: "Bucarest",
          b: "Sibiu",
          c: "Bran"
        },
        respuestaCorrecta: "a"
      },
      {
        pregunta: "18. Cuál es la capital de Suiza?",
        respuestas: {
          a: "Berna",
          b: "Lucerna",
          c: "Lugano"
        },
        respuestaCorrecta: "a"
      },
      {
        pregunta: "19. Cuál es la capital de Italia?",
        respuestas: {
          a: "Roma",
          b: "Turin",
          c: "Milan"
        },
        respuestaCorrecta: "a"
      },
      {
        pregunta: "20. Cuál es la capital Paraguay?",
        respuestas: {
          a: "Asunción",
          b: "San lorenzo",
          c: "Ciudad del este"
        },
        respuestaCorrecta: "b"
      }
   
   
];

function mostrarTest(){
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label>
                   <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
                   ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                   </input>
                </label> `
            );
        }
        preguntasYrespuestas.push(
            `<div class="cuestion"> ${preguntaActual.pregunta} </div>
            <div class="respuestas"> ${respuestas.join('')} </div>
            `
        );
    });

    contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarTest();

function mostrarResultado(){
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
        const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;

        if(respuestaElegida === preguntaActual.respuestaCorrecta){
            respuestasCorrectas++;

            respuestas[numeroDePregunta].style.color = 'green';
        }else {
              respuestas[numeroDePregunta].style.color = 'red';
        }
    });

resultadoTest.innerHTML = ' Usted ha acertado ' + respuestasCorrectas + ' preguntas de un total de ' + preguntas.length;

}

botonRes.addEventListener('click', mostrarResultado);