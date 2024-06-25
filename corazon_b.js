$(document).ready(function() {
    var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
    var el = document.querySelector('.button_cora');
    var photoContainer = $('#photoContainer');

    console.log('Elemento seleccionado:', el); // Debugging: Verifica que el elemento se selecciona correctamente

    // mo.js timeline obj
    var timeline = new mojs.Timeline(),

    // tweens for the animation:

    // burst animation
    tween1 = new mojs.Burst({
        parent: el,
        radius: { 0: 100 },
        angle: { 0: 45 },
        y: -10,
        count: 10,
        children: {
            shape: 'circle',
            radius: 30,
            fill: ['red', 'white'],
            strokeWidth: 15,
            duration: 500,
        }
    }),

    tween2 = new mojs.Tween({
        duration: 900,
        onUpdate: function(progress) {
            var scaleProgress = scaleCurve(progress);
            el.style.WebkitTransform = el.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
        }
    }),

    tween3 = new mojs.Burst({
        parent: el,
        radius: { 0: 100 },
        angle: { 0: -45 },
        y: -10,
        count: 10,
        children: {
            shape: 'circle',
            radius: 30,
            fill: ['white', 'red'],
            strokeWidth: 15,
            duration: 400,
        }
    });

    // add tweens to timeline:
    timeline.add(tween1, tween2, tween3);

    // Function to load images
    function loadImages() {
        var images = [
            '20JA/1.jpg',
            '20JA/2.jpg',
            '20JA/3.jpg',
            '20JA/4.jpg',
            '20JA/5.jpg',
            '20JA/6.jpg',
            '20JA/7.jpg',
            '20JA/8.jpg',
            '20JA/9.jpg',
            '20JA/10.jpg',
            '20JA/11.jpg',
            '20JA/12.jpg',
            '20JA/13.jpg',
            '20JA/14.jpg',
            '20JA/15.jpg',
            '20JA/16.jpg',
            '20JA/17.jpg',
            '20JA/18.jpg',
            '20JA/19.jpg',
            '20JA/20.jpg',
            '20JA/21.jpg',
            '20JA/22.jpg',
            '20JA/23.jpg',
            '20JA/24.jpg',
            '20JA/25.jpg',
            '20JA/26.jpg',
            '20JA/27.jpg',
            '20JA/28.jpg',
            '20JA/29.jpg',
            '20JA/30.jpg',
            '20JA/31.jpg',
            '20JA/32.jpg',
            '20JA/33.jpg',
            '20JA/34.jpg',
            '20JA/35.jpg',
            '20JA/36.jpg',
            '20JA/37.jpg',
            // Añade las rutas de todas tus imágenes aquí
        ];

        images.forEach(function(src, index) {
            var img = $('<img>').attr('src', src).addClass('photo');
            photoContainer.append(img);
            
            // Random position
            var posX = Math.random() * ($(window).width() - 200); // Adjust the offset to fit your needs
            var posY = Math.random() * ($(window).height() - 200); // Adjust the offset to fit your needs
            
            img.css({
                position: 'absolute',
                left: posX,
                top: posY,
                display: 'none'
            });

            // Fade in with delay
            img.delay(index * 300).fadeIn(1000);
        });
    }

    // when clicking the button start the timeline/animation and load images:
    $(".button_cora").click(function() {
        console.log('Botón clicado'); // Debugging: Verifica que el clic se detecta
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            timeline.play();
            loadImages(); // Cargar imágenes al hacer clic
            $(this).addClass('active');
        }
    });
});
