window.onload = function() {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const textSection = document.querySelector('.text-section');
    const imageSection = document.querySelector('.image-section img');

    openModalBtn.onclick = function() {
        modal.style.display = 'block';
    }

    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    function setImageHeight() {
        const textSectionHeight = textSection.offsetHeight;
        imageSection.style.height = `${textSectionHeight}px`;
    }

    setImageHeight();
    window.onresize = setImageHeight;
}
