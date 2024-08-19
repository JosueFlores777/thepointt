
comercios = [
    {
        nombre: 'Krazy Papas',
        img: './assets/img/content/Comercios/picture-0.jpg',
        descripcion: 'Las mejores Belgian Style Fries',
        url: 'https://www.instagram.com/krazy_papas/'
    },
    {
        nombre: 'Hawaiice',
        img: './assets/img/content/Comercios/picture-1.jpg',
        descripcion: 'Traemos minutas Hawaiianas hasta El Salvador! 🍧🌈 100% Agua Purificada y +20 sabores💧',
        url: 'https://www.instagram.com/hawaiice.sv/'

    },
    {
        nombre: 'The Coffee Cup',
        img: './assets/img/content/Comercios/picture-2.jpg',
        descripcion: 'Disfruta de la mejor experiencia de café gourmet 100% salvadoreño.',
        url: 'https://www.instagram.com/thecoffeecup_sv/'
    },
    {
        nombre: 'Pupuseria Suiza',
        img: './assets/img/content/Comercios/picture-3.jpg',
        descripcion: 'Desde 1999 haciendo pupusas con ingredientes de calidad. Lo que importa es lo de adentro 🧡',
        url: 'https://www.instagram.com/pupuseriasuiza/'
    },
    {
        nombre: 'Prado',
        img: './assets/img/content/Comercios/picture-4.jpg',
        descripcion: 'Lo mejor para tu hogar lo encuentras en Prado ¡Para qué ir a otro lado!',
        url: 'https://www.instagram.com/prado_sv/'
    },
    {
        nombre: 'Mr.Laundry',
        img: './assets/img/content/Comercios/picture-5.jpg',
        descripcion: 'Lavandería profesional ¡Nos encargamos de todas tus prendas!',
        url: 'https://www.instagram.com/mrlaundrysv/'
    },
    {
        nombre: 'Ceramica Romani',
        img: './assets/img/content/Comercios/picture-6.jpg',
        descripcion: 'Ceramica Romani y Bodegon de la Ceramica. Venta de Ceramica en El Salvador.',
        url: 'https://www.instagram.com/onlineceramicasv/'
    },
    {
        nombre: 'Shrimp Factory',
        img: './assets/img/content/Comercios/picture-7.jpg',
        descripcion: 'Una nueva forma de disfrutar los mariscos en Surf City🦐☀️🌊',
        url: 'https://www.instagram.com/shrimpfactory.sv/'
    },
    {
        nombre: 'La Neveria',
        img: './assets/img/content/Comercios/picture-8.jpg',
        descripcion: '"Siempre Algo Nuevo" Helados, paletas, pasteles de helado y de pan, crepas, helado de yogurt y Chocolates',
        url: 'https://www.instagram.com/laneveria_oficial/'
    },
    {
        nombre: '300 MMA Training Center',
        img: './assets/img/content/Comercios/picture-9.jpg',
        descripcion: 'Somos el centro de entrenamiento para las MMA en El Salvador!',
        url: 'https://www.instagram.com/300mmatrainingcenter/'
    },
    {
        nombre: 'G-Box',
        img: './assets/img/content/Comercios/picture-10.jpg',
        descripcion: 'Tu mejor opción de compras por Internet. ✈️🛍📦',
        url: 'https://www.instagram.com/gbox.sv/'
    },
    {
        nombre: 'Academia Europea',
        img: './assets/img/content/Comercios/picture-11.jpg',
        descripcion: 'Somos la academia de idiomas más grande del continente americano, Headquarters MIAMI, FL, USA. No. 1 En Idiomas 🇺🇸 🇫🇷 🇮🇹 🇨🇳 🇵🇹 🇪🇸 🇯🇵 🇩🇪 ',
        url: 'https://www.instagram.com/academiaeuropea.sv/'
    },
    {
        nombre: 'Castella Sagarra',
        img: './assets/img/content/Comercios/picture-12.jpg',
        descripcion: '🚰 Especialistas en equipo de bombeo. Encuentra todo en cerrajería, fontanería, jardinería, herramientas y más.',
        url: 'https://www.instagram.com/castellasagarra/'
    }
];


// Array de logos

logos = [
'./assets/img/logo/asset 18.png',
'./assets/img/logo/asset 19.png',
'./assets/img/logo/asset 20.png',
'./assets/img/logo/asset 21.png',
'./assets/img/logo/asset 22.png',
'./assets/img/logo/asset 23.png',
'./assets/img/logo/asset 24.png',
'./assets/img/logo/asset 25.png',
'./assets/img/logo/asset 26.png'

];

// Renderiza las tarjetas de comercio en la sección del carrusel
const carousel = document.querySelector('.carousel');
comercios.forEach(comercio => {
    const card = document.createElement('div');
    card.className = 'slide';
    card.innerHTML = `
        <div class="card">
            <img src="${comercio.img}" class="card-img-top" alt="${comercio.nombre}">
            <div class="card-body">
                <h5 class="card-title" style="height: 25px;">${comercio.nombre}</h5>
                <p class="text-start" style="height: 79px;">${comercio.descripcion}</p>
                <a href="${comercio.url}" class="btn-link" target="_blank">More Info <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>`;
    carousel.appendChild(card);
});

// Inicializa el carrusel
$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1021,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Renderiza los logos en la sección del carrusel de logos
const logoCarousel = document.querySelector('.scroller-home');
logos.forEach(logo => {
    const logoItem = document.createElement('div');
    logoItem.className = 'scroller-home__inner logocarruel';
    logoItem.innerHTML = `<img src="${logo}" alt="">`;
    logoCarousel.appendChild(logoItem);
});

// Inicializa el carrusel de logos
$(document).ready(function () {
    $('.scroller-home').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        speed: 5000,
        cssEase: 'linear',
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});