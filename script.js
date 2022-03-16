function crisrmas() {
    const day = new Date('December 25, 2021 00:00');
    const now = new Date();
    const res = day - now;

    const inSecond = 1000;
    const inMinutes = 60 * 1000;
    const inHour = 60 * 60 * 1000;
    const inDay = 24 * 60 * 60 * 1000;
    
    const displayDay = Math.floor(res / inDay);
    document.querySelector('.day').textContent = displayDay;
    const displayHour = Math.floor((res % inDay) / inHour);
    document.querySelector('.hour').textContent = displayHour;
    const displayMinutes = Math.floor((res % inHour) / inMinutes);
    document.querySelector('.minutes').textContent = displayMinutes;
    const displaySeconds = Math.floor((res % inMinutes) / inSecond);
    document.querySelector('.seconds').textContent = displaySeconds;
    if (res <=0) {
        document.querySelector('.day').textContent = 0;
        document.querySelector('.hour').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(setcris);
        marryCris();
    }

}
let setcris = setInterval(crisrmas, 1000);

function marryCris() {
    const head = document.querySelector('h1');
    head.textContent = 'MERRY CHRISTMAS!!! HO-HO-HO!';
    head.classList.add('new');
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    document.querySelector('.myAudio').play();
})
const btnTwo = document.querySelector('.btnTwo');
btnTwo.addEventListener('click', function() {
  document.querySelector('.myAudio').pause();
})

// snow 
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 1000,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 3,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 300,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode":  "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.2
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  