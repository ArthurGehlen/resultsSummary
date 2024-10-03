fetch('./data.json')
    .then (response => response.json())
    .then (data => {
        const summary_characteristics = document.getElementById("summary_characteristics");

        data.forEach(item => {
            const section = document.createElement("section");
            section.style.backgroundColor = item.backgroundColor;
            section.style.color = item.color;

            const text = document.createElement("div");
            text.classList.add("text");

            const number = document.createElement("div");
            number.classList.add("numbers");

            text.innerHTML = `
                <img src=${item.icon} width="20px" height="20px">
                <span>${item.category}</span>
            `;

            number.innerHTML = `
                <p>
                    <span>${item.score}</span>
                    /
                    100
                </p>
            `;

            section.appendChild(text);
            section.appendChild(number);

            summary_characteristics.appendChild(section);
        });
    })
    .catch(error => {
        console.log(error);
    })