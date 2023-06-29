document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.querySelector(".results-list__order-by-selector");
    const optionElements = selectElement.querySelectorAll('option');

    optionElements.forEach(function (optionElement) {
        if (optionElement.value === "etiqueta") {
            optionElement.textContent = "Mais escolhido";
        }
        if (optionElement.value === "precio") {
            optionElement.textContent = "Preço: baixo a alto";
        }
        if (optionElement.value === "precioDesc") {
            optionElement.textContent = "Preço: maior para menor";
        }
        if (optionElement.value === "categoria") {
            optionElement.textContent = "Estrelas: da menor para a maior";
        }
        if (optionElement.value === "categoriaInv") {
            optionElement.textContent = "Estrelas: da mais alta para a mais baixa";
        }
        if (optionElement.value === "nombre" || optionElement.value === "nombreInv") {
            optionElement.style.display = "none";
        }
    });

    const select2Span = document.querySelector('span[title="Recomendado"]');
    if (select2Span) {
        select2Span.textContent = "Mais escolhido";
        select2Span.setAttribute("title", "Mais escolhido");
    }

    const spanElement = document.querySelector(".select2-results__option.select2-results__option--highlighted");
    if (spanElement && spanElement.textContent.trim() === "Recomendado") {
        spanElement.textContent = "Mais escolhido";
        spanElement.setAttribute("title", "Mais escolhido");
    }
    const selectContainer = document.querySelector('.results-list__order-by-selector.select2-hidden-accessible');

    selectContainer.addEventListener('click', function () {
        const MasElegido = document.querySelector('.select2-results__options')
        const firstOption = MasElegido.querySelector('.select2-results__option:first-child');
        if (firstOption) {
            firstOption.textContent = 'Mais escolhido';
          }
    });

});