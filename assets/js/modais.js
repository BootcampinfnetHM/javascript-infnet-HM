let noticiasContainer = Array.from(document.getElementsByClassName('container-infos-col'));

let JsonTodasNoticias = []

let abrirModalNoticia = document.querySelector('#todasNoticias-btn')
abrirModalNoticia.addEventListener('click', () => {

botaoAddConteudo.scrollIntoView(true)
    
})


let botaoAddConteudo = document.querySelector('#formBtnAddNoticia')
let spinnerDiv = document.querySelector('#spinner-div')


botaoAddConteudo.addEventListener('click', (e) => {

    let tituloConteudo = document.getElementById('formAddTituloNoticia').value,
            imgSrcConteudo = document.getElementById('formAddImgNoticia').value,
            txtConteudo = document.getElementById('formAddTxtNoticia').value
    
    $('#addNoticiaModal').modal('hide')

    spinnerDiv.innerHTML = 
    `
    <div class="spinner-border text-light" id="spinnerFakeNoticia" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `
    spinnerDiv.style.display = 'block'
    spinnerDiv.style.position = 'fixed'
    spinnerDiv.style.top = '50%'
    spinnerDiv.style.left = '50%'

    setTimeout(() => {
        spinnerDiv.style.display = 'none'
    }, 1000);

    setTimeout(() => {
        let selectRowCarousel = document.getElementById('row-carousel-noticia')

        let modalTitulo = document.querySelector('#noticiasModalLabel')
        modalTitulo.innerHTML = tituloConteudo

        let JsonNoticia = {
            tituloConteudo: tituloConteudo,
            imagemSrc: imgSrcConteudo,
            corpoDeTexto: txtConteudo
        }

        JsonTodasNoticias = [...JsonTodasNoticias, JsonNoticia]

        
        let addCarouselContainer = document.createElement('div')
        addCarouselContainer.setAttribute('class', 'col container-infos-col col-sm-12 col-md-3 col-xl-3 col-xxl-3')
        addCarouselContainer.setAttribute('id', 'container-noticia-' + selectRowCarousel.childElementCount)
        addCarouselContainer.setAttribute('data-bs-toggle', 'modal')
        addCarouselContainer.setAttribute('data-bs-target', '#noticiasModal')
        addCarouselContainer.style.backgroundImage =  `url('${imgSrcConteudo}')`
        addCarouselContainer.style.backgroundSize =  `cover`
        
        let addCarouselTitulo = document.createElement('p')
            addCarouselTitulo.setAttribute('class', 'titulo-modal-html')
            addCarouselTitulo.innerText = tituloConteudo


        let addCarouselImg = document.createElement('img')
            addCarouselImg.setAttribute('src', imgSrcConteudo)


        addCarouselContainer.appendChild(addCarouselTitulo)
        selectRowCarousel.appendChild(addCarouselContainer)

        
    }, 1500);

    
    setTimeout(() => {
        let noticiasContainer = Array.from(document.getElementsByClassName('container-infos-col'));
        noticiasContainer.forEach((container, idx) => {
            container.setAttribute('id', 'container-noticia-' + idx)
            container.setAttribute('data-bs-toggle', "modal")
            container.setAttribute('data-bs-target', '#noticiasModal')
        
            let tituloModal = document.getElementById('noticiasModalLabel'),
                tituloP = document.getElementsByClassName('titulo-modal-html')
            
            let corpoTxtModal = document.getElementById('corpoTxtNoticia')

        
            container.addEventListener('click', () => {
                    tituloModal.innerHTML = `${tituloP[idx].innerHTML}`
                    corpoTxtModal.innerHTML = `
                    <img src="${JsonTodasNoticias[idx].imagemSrc}">
                    <p>${JsonTodasNoticias[idx].corpoDeTexto}</p>
                    `
                    

                    // corpoTxtModal.innerHTML = `<img src="${JsonTodasNoticias[idx].imagemSrc} ">`
                    console.log(JsonTodasNoticias)
                })
            });
            
    }, 2000);

    

})




