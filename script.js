/*==================================================
                ELEMENTOS
==================================================*/

const btn = document.getElementById("openLetter");
console.log(btn);
const lid = document.querySelector(".lid");
const paper = document.getElementById("paper");

const welcome = document.getElementById("welcome");
const letterPage = document.getElementById("letterPage");

const typingText = document.getElementById("typingText");

const music = document.getElementById("music");
const hearts = document.getElementById("hearts");


/*==================================================
                OCULTAR CARTA
==================================================*/

letterPage.style.display = "none";


/*==================================================
                TEXTO DE LA CARTA
==================================================*/

const carta = `

Hola Alondra ❤️

No sabía muy bien cómo empezar esta carta...

Porque por más que intentaba escribir un simple mensaje, sentía que no era suficiente.

Así que decidí hacer algo diferente.

Una pequeña página hecha especialmente para ti.

Aquí podrás leer todo lo que a veces me cuesta decir con palabras.❤️

Amor mío,

La verdad, estoy escribiendo esto con el corazón en la mano, porque hay cosas que siento por ti que a veces ni yo mismo sé cómo explicar. Es increíble pensar que una persona que todavía estoy conociendo pueda llegar a ocupar un lugar tan grande en mi vida. No sé cómo pasó, ni en qué momento empezaste a ser alguien tan importante para mí, pero siento que llegaste como un regalo del cielo, como una de esas personas que aparecen por alguna razón y que uno no quiere dejar ir.

Lo que siento por ti no nació de la noche a la mañana, ha ido creciendo con cada momento, con cada palabra, con cada sonrisa y con cada detalle que compartes conmigo. A veces intento encontrar las palabras exactas para explicar lo mucho que significas para mí, pero siento que ninguna alcanza. Solo sé que cuando pienso en ti sonrío, me siento feliz y siento algo que nunca había sentido por alguien.

Me enamoran tus ojitos tan grandes y lindos, esa forma en la que miras que hace que todo se sienta diferente. Me encantan tus abrazos, porque aunque quizá no hayan sido tantos como me gustaría, tienen algo especial, algo que me hace sentir una tranquilidad y un cariño que extrañaba desde hace mucho tiempo. Me encanta tu voz, esa voz que incluso diciendo cualquier cosa logra hacerme sentir bien, porque para mí tiene algo único que no encuentro en nadie más.

Sé que no soy perfecto, y sé que a veces mis inseguridades aparecen. La verdad es que no es porque dude de ti, sino porque me importas demasiado. Me da miedo no ser suficiente para alguien como tú, porque sé la persona tan increíble que eres. Eres una mujer hermosa, especial, alguien que vale muchísimo la pena conocer y cuidar. A veces pienso que podrías tener a quien quisieras, y eso me hace sentir nervioso, porque yo solo quiero ser alguien que te haga feliz y que te demuestre lo mucho que vales.

Quiero que sepas que por ti daría todo lo que estuviera en mis manos. No porque tenga que hacerlo, sino porque cuando quieres de verdad a una persona nace ese deseo de cuidarla, apoyarla y estar ahí en cada momento. Si algún día la vida se pusiera difícil y pareciera que hay mil obstáculos entre nosotros, yo seguiría buscando la manera de llegar a ti. Si estuviera esperando en un lugar lejano, seguiría teniendo la esperanza de que algún día llegarías por mí, porque siento que eres parte de mi camino y que conocerte no fue una casualidad.

Te amo de una manera que incluso a mí me sorprende. Te amo más de lo que puedo explicar, más de lo que mis palabras pueden demostrar. Te amo tres millones y más, porque siento que no existe una medida exacta para todo lo que me haces sentir. Haría lo imposible por verte feliz, por verte sonreír y por demostrarte que tienes a alguien que realmente te valora.

Y aunque llegaran millones de personas a mi vida, siento que ninguna tendría eso que tú tienes. Porque no se trata solo de tu belleza, sino de cómo me haces sentir, de la paz que me das y de la felicidad que aparece cuando estoy contigo. Siento que llegaste a mi vida por algo, y que sigues aquí por una razón.

Quiero seguir conociéndote, seguir creando momentos contigo, seguir teniendo la oportunidad de llamarte mi amor y de demostrarte cada día lo importante que eres para mí.

No espero que estas palabras hagan que te enamores más de mí de repente, solo quiero que entiendas que detrás de ellas hay alguien que te quiere muchísimo, alguien que a veces se queda sin palabras porque siente demasiado.

Gracias por llegar a mi vida. Gracias por ser tú.

Te amo más de lo que imaginas.



`;
/*==================================================
            EFECTO MÁQUINA DE ESCRIBIR
==================================================*/

let indice = 0;

function escribirCarta(){

    typingText.innerHTML = "";

    indice = 0;

    escribir();

}

function escribir(){

    if(indice < carta.length){

        typingText.innerHTML += carta.charAt(indice);

        indice++;

        setTimeout(escribir,35);

    }

}
/*==================================================
            CORAZONES FLOTANTES
==================================================*/

function crearCorazon(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";

    heart.style.left = Math.random()*100 + "%";

    heart.style.bottom = "-40px";

    heart.style.fontSize = (18 + Math.random()*22) + "px";

    heart.style.color = "rgba(255,255,255,.8)";

    heart.style.pointerEvents = "none";

    heart.style.animation =
    "floatHeart " + (5 + Math.random()*4) + "s linear forwards";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(crearCorazon,250);
/*==================================================
                KEYFRAMES
==================================================*/

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatHeart{

0%{

transform:translateY(0) rotate(0deg);

opacity:0;

}

10%{

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
/*==================================================
                ABRIR EL SOBRE
==================================================*/

btn.addEventListener("click", abrirCarta);

function abrirCarta(){
    console.log("CLICK");

    // Evita hacer clic varias veces
    btn.disabled = true;

    // Ocultar botón
    btn.style.opacity = "0";
    btn.style.transform = "translateY(20px)";

    // Reproducir música
    if(music){

        music.volume = 0.3;

        music.play().catch(()=>{});

    }

    // Abrir tapa
    setTimeout(()=>{

        lid.style.transform = "rotateX(180deg)";

    },500);

    // Sacar papel
    setTimeout(()=>{

        paper.style.transform = "translateY(-180px)";

    },1200);

    // Agrandar un poco el papel
    setTimeout(()=>{

        paper.style.transform =
        "translateY(-180px) scale(1.08)";

    },1900);

    // Destello
    setTimeout(()=>{

        flash();

    },2200);

    // Desaparece portada
    setTimeout(()=>{

        welcome.style.transition = "1.2s";

        welcome.style.opacity = "0";

    },2700);

    // Mostrar carta
    setTimeout(()=>{

        welcome.style.display = "none";

        letterPage.style.display = "flex";

        escribirCarta();

    },3800);

}
/*==================================================
                    DESTELLO
==================================================*/

function flash(){

    const light = document.createElement("div");

    light.style.position = "fixed";

    light.style.left = "50%";

    light.style.top = "50%";

    light.style.transform =
    "translate(-50%,-50%)";

    light.style.width = "25px";

    light.style.height = "25px";

    light.style.borderRadius = "50%";

    light.style.background = "white";

    light.style.boxShadow =
    "0 0 220px 180px white";

    light.style.zIndex = "9999";

    light.style.transition = "1.2s";

    document.body.appendChild(light);

    setTimeout(()=>{

        light.style.opacity = "0";

    },100);

    setTimeout(()=>{

        light.remove();

    },1200);

}
console.log("Script funcionando");