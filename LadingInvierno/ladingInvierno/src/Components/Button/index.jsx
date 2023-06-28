function Button(props) {
    const handleClick = (event) => {
        event.preventDefault();

        if (window.innerWidth <= 767) {
            // Llamar a un número en dispositivos móviles
            window.location.href = 'tel:08003480003';}
        // } else {
        //     window.open(props.link, '_blank');
        // }
    };

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

export default Button