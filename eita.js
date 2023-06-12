const mario = document.querySelector('.MarioRunning');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 30 && pipePosition > 0 && marioPosition < 90) {


        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'D:/Luis Augusto/Projetos/MarioJump/imagens/MarioDeath1.png';
        mario.style.width = '70px'

        clearInterval (loop);
    }

}, 10)

document.addEventListener('keydown', jump);