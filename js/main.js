document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos de tab con la clase 'nav-link'
    const tabLinks = document.querySelectorAll(".nav-link");

    tabLinks.forEach(link => {
        // Escucha el evento 'click' en cada tab
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Elimina 'active' y 'show' de todos los tabs y sus contenidos
            tabLinks.forEach(tab => tab.classList.remove("active"));
            document.querySelectorAll(".tab-pane").forEach(pane => {
                pane.classList.remove("active");
                pane.classList.remove("show");
            });

            // Agrega 'active' al tab clicado
            this.classList.add("active");

            // Obtiene el ID del contenido asociado al tab clicado
            const target = document.querySelector(this.getAttribute("href"));
            
            // Agrega 'active' y 'show' al contenido correspondiente
            target.classList.add("active");
            target.classList.add("show");
        });
    });
});