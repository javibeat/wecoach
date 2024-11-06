// /Users/javibeat/Design/WEBS/WeCoach/script.js

document.addEventListener("DOMContentLoaded", function () {
    // Cargar el menú
    fetch('menu.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el menú');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
            console.log("Menú cargado exitosamente");

            // Llamamos a la función para inicializar el menú después de cargarlo en el DOM
            initializeMenu();
        })
        .catch(error => console.error('Error al cargar el menú:', error));

    // Funcionalidad de giro de tarjetas
    const flipButtons = document.querySelectorAll('.flipButton');
    flipButtons.forEach(button => {
        button.addEventListener('click', function () {
            const flipCard = button.closest('.flipCard');
            flipCard.classList.toggle('showBack');
        });
    });
});

// Función para inicializar el menú móvil
function initializeMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const body = document.body;

    if (mobileMenu && navList) {
        console.log("Elementos del menú encontrados en el DOM");

        // Función para abrir/cerrar el menú
        function toggleMenu() {
            navList.classList.toggle('active');  // Mostrar/ocultar menú
            mobileMenu.classList.toggle('open'); // Cambiar ícono de hamburguesa a "X"
            body.classList.toggle('menu-open');  // Deshabilitar el scroll cuando el menú esté abierto
        }

        // Evento para abrir/cerrar el menú al hacer clic en el menú hamburger
        mobileMenu.addEventListener('click', toggleMenu);

        // Evento para cerrar el menú al presionar la tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navList.classList.contains('active')) {
                toggleMenu(); // Cerrar el menú si está abierto y se presiona ESC
            }
        });
    } else {
        console.error("Error: Los elementos del menú no se encontraron en el DOM.");
    }
}
