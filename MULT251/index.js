document.addEventListener('DOMContentLoaded', function () {
    const liElement = document.querySelector('.booking-payment__options-prepayment');
    const bookingPaymentOptions = document.querySelector('.booking-payment__options');

    if (liElement) {
        liElement.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === 'Transferência Bancária') {
                node.textContent = 'Transferência / Dinheiro';
                bookingPaymentOptions.style.display = 'inline-block';
            }
        });
    }
});