
    let currentImageIndex = 0;
    const images = ['imagens visita/todes.jpg', 'imagens visita/nosdecima.jpg', 'imagens visita/pesamoo.jpg', 'imagens visita/porcoaut.jpg','imagens visita/teris.jpg', 'imagens visita/nosnoonibus.jpg','imagens visita/kauatras.jpg','imagens visita/euebella1.jpg', 'imagens visita/euebella2.jpg','imagens visita/euebella3.jpg','imagens visita/bellalouca.jpg'];

    function openModal(imageSrc) {
        const modal = document.getElementById('myModal');
        const modalImage = document.getElementById('modalImage');

        currentImageIndex = images.indexOf(imageSrc);

        modal.style.display = 'block';
        modalImage.src = imageSrc;
    }

    function closeModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const modalImage = document.getElementById('modalImage');
        modalImage.src = images[currentImageIndex];
    }

    // Fecha o modal ao clicar fora da imagem
    const modal = document.getElementById('myModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

