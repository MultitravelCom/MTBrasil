document.addEventListener("DOMContentLoaded", function () {
    const selectors = [
        "#main-content > div > article > section.details-content > div.details-card__section.details-card__description",
        ".details-card__amenities.details-card__section",
        ".details-card__description.details-card__section",
        ".details-card__section.details-card__section"
    ];

    const elementsWithIcon = new Set();

    selectors.forEach(function (selector) {
        const sections = document.querySelectorAll(selector);

        sections.forEach(function (section) {
            const content = section.querySelector(".details-card__section-content");

            // Establecer un valor predeterminado para content.style.display
            content.style.display = "none";

            let icon = null;

            if (!elementsWithIcon.has(section)) {
                icon = document.createElement('div');
                icon.className = "glyphicon glyphicon-chevron-down chevron-down-hotels";
                section.appendChild(icon);

                elementsWithIcon.add(section);
            }

            section.addEventListener("click", function () {
                if (content.style.display === "none") {
                    content.style.display = "block";
                    if (icon) {
                        icon.style.transform = "rotate(180deg)";
                    }
                } else {
                    content.style.display = "none";
                    if (icon) {
                        icon.style.transform = "rotate(0deg)";
                    }
                }
            });
        });
    });
});