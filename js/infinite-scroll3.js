document.addEventListener("DOMContentLoaded", function () {
   
    const container = document.querySelector('.cuatro');
    const images = container.querySelectorAll('img');
    const cloneCount = 5;
    let isLoading = false; 

   
    function cloneImages(images) {
        const cloneContainer = document.createDocumentFragment();
        images.forEach(img => {
            const clone = img.cloneNode(true);
            cloneContainer.appendChild(clone);
        });
        return cloneContainer;
    }

 
    function checkScroll() {
        if (!isLoading && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 200) {
            isLoading = true;


            container.appendChild(cloneImages(images));

            isLoading = false;
        }
    }

 
    window.addEventListener('scroll', checkScroll);
});
