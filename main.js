'use strict';

const input = document.getElementById('select-cities');
const closeBtn = document.querySelector('.close-button');
const mainBtn = document.querySelector('.button');
const dropdownDefault = document.querySelector('.dropdown-lists__list--default');
const dropdownSelect = document.querySelector('.dropdown-lists__list--select');
const dropdownAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete');
const dropdown = document.querySelectorAll(".dropdown-lists__col");
const mainBlock = document.querySelector('.input-cities');

mainBlock.style.display='none';
let newLeft;

const getDate = (outputDate, errorDate) => {
    const request = new XMLHttpRequest();
    request.open("GET", "./db_cities.json");
    request.addEventListener("readystatechange", () => {
        if (request.readyState !== 4) {
            return;
        }
        if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            outputDate(data);
        } else {
            errorDate();
        }
    });
    request.send();
};

mainBtn.style.pointerEvents = 'none';

const getDefault = () => {
    dropdown.forEach((item) => {
        item.textContent = '';
    });
};

const filter = (item) => {
    let arr = [];
    item.forEach((elem) => {
        arr.push(elem.count);
    });
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr;
};

const getCity = (block, city, index = 1) => {
    if (index === 0) {
        block.insertAdjacentHTML(
            "beforeend",
            `<div class="dropdown-lists__line">
            <div class="dropdown-lists__city dropdown-lists__city--ip">
                ${city.name}</div>
            <div class="dropdown-lists__count">${city.count}</div>
        </div>`
        );
    } else {
        block.insertAdjacentHTML(
            "beforeend",
            `<div class="dropdown-lists__line">
            <div class="dropdown-lists__city">
                ${city.name}</div>
            <div class="dropdown-lists__count">${city.count}</div>
        </div>`
        );
    }

};

const getTopCity = (item, block) => {
    let arr = filter(item.cities);

    for (let i = 0; i < 3; i++) {
        item.cities.forEach((city) => {
            if (city.count === arr[i]) {
                getCity(block, city, i);
            }
        });
    }
};

const clickCity = (target,data) => {
    target = target.closest(".dropdown-lists__line");
    const elem = target.querySelector(".dropdown-lists__city");
    input.value = elem.textContent.trim();
    closeBtn.style.display = 'inline-block';
    data.RU.forEach((item) => {
        item.cities.forEach((city) => {
            if (city.name === elem.textContent.trim()) {
                mainBtn.target = "_blank";
                mainBtn.href = city.link;
            }
        });
    });
    getDefault();
    mainBtn.style.pointerEvents = 'auto';
};

const animationLeft = () => {
    newLeft += 20;    
    dropdownSelect.style.left = `${newLeft}px`;
    if (newLeft < 0) {
        window.requestAnimationFrame(animationLeft);
    }
};

const animationRigth = () => {
    newLeft -= 20;    
    dropdownDefault.style.left = `${newLeft}px`;
    if (newLeft > 0) {
        window.requestAnimationFrame(animationRigth);
    }
};

const getDropdownDefault = (data) => {
    dropdownSelect.style.display = 'none';
    dropdownDefault.style.display = 'block';
    dropdownAutocomplete.style.display = 'none';
    const dropdownLists = dropdownDefault.querySelector(".dropdown-lists__col");
    data.RU.forEach((item, index) => {
        dropdownLists.insertAdjacentHTML(
            "beforeend",
            `<div class="dropdown-lists__countryBlock">
            <div class="dropdown-lists__total-line">
                  <div class="dropdown-lists__country">${item.country}</div>
                  <div class="dropdown-lists__count">${item.count}</div>
            </div>
            </div>`
        );
        const countryBlock = dropdownLists.querySelectorAll(
            ".dropdown-lists__countryBlock");

        let arr = filter(item.cities);

        for (let i = 0; i < 3; i++) {
            item.cities.forEach((city) => {
                if (city.count === arr[i]) {
                    getCity(countryBlock[index], city, i);
                }
            });
        }

    });
};

const getDropdownSelect = (target,data) => {
    target = target.closest(".dropdown-lists__total-line");
    const elem = target.querySelector(".dropdown-lists__country").textContent;
    input.value = elem;
    closeBtn.style.display = 'inline-block';

    getDefault();
    mainBtn.style.pointerEvents = 'none';
    const dropdownLists = dropdownSelect.querySelector(".dropdown-lists__col");
    dropdownSelect.style.display = 'block';
    dropdownDefault.style.display = 'none';
    dropdownAutocomplete.style.display = 'none';
    newLeft = -400;
    dropdownSelect.style.position = 'relative';
    dropdownSelect.style.left = `${newLeft}px`;
    
    data.RU.forEach((item) => {
        if (item.country === elem) {
            dropdownLists.insertAdjacentHTML(
                "beforeend",
                `<div class="dropdown-lists__countryBlock">
            <div class="dropdown-lists__total-line">
                  <div class="dropdown-lists__country">${item.country}</div>
                  <div class="dropdown-lists__count">${item.count}</div>
            </div>
            </div>`
            );
            let arr = filter(item.cities);

            const countryBlock = dropdownSelect.querySelector(
                ".dropdown-lists__countryBlock");

            for (let i = 0; i < arr.length; i++) {
                item.cities.forEach((city) => {
                    if (city.count === arr[i]) {
                        getCity(countryBlock, city, i);
                    }
                });
            }
        }

    });
    animationLeft();

};

const getDropdownAutocomplete = (data) => {    
    const dropdownLists = dropdownAutocomplete.querySelector(".dropdown-lists__col");
    dropdownSelect.style.display = 'none';
    dropdownDefault.style.display = 'none';
    dropdownAutocomplete.style.display = 'block';
    if (input.value !== '') {
        getDefault();
        closeBtn.style.display = "none";
        mainBtn.style.pointerEvents = 'none';
        let userItem = input.value.toLowerCase();
        data.RU.forEach((item) => {
            item.cities.forEach((city) => {
                let itemCity = city.name
                    .substring(0, input.value.length)
                    .toLowerCase();
                if (userItem === itemCity) {
                    dropdownLists.insertAdjacentHTML(
                        "beforeend",
                        `<div class="dropdown-lists__countryBlock">
            <div class = "dropdown-lists__line">
                  <div class = "dropdown-lists__city" >
                  <b>${city.name.substring(0,input.value.length)}</b>${
                      city.name.substring(input.value.length, city.name.length)}
                   </div>
                  <div class="dropdown-lists__count">${city.count}</div>
            </div>
            </div>`
                    );
                }
            });
        });
        if (dropdownLists.textContent === '') {
            dropdownLists.insertAdjacentHTML(
                "beforeend",
                `<div class="dropdown-lists__countryBlock">
            <div>
                  <div>Ничего не найдено</div>                  
            </div>
            </div>`);
        }
    } else {
        getDropdownDefault(data);
    }
};

const progressDate = (data) => {    
    mainBlock.style.display = 'block';
    document.body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('input') !== null) {
            getDefault();
            getDropdownDefault(data);
        }
        if (
            target.closest("input") === null &&
            target.closest(".dropdown") === null &&
            target.closest(".button") === null
        ) {
            input.value = '';
            closeBtn.style.display = "none";
            mainBtn.style.pointerEvents = 'none';
            getDefault();
        }
        if (target.closest(".dropdown-lists__total-line") !== null) {
            if (target.closest('.dropdown-lists__list--default')) {
                getDropdownSelect(target,data);
            } else {
                newLeft = 400;
                dropdownDefault.style.position = 'relative';
                dropdownDefault.style.left = `${newLeft}px`;
                getDropdownDefault(data);
                animationRigth();
            }
        }
        if (target.closest(".dropdown-lists__line") !== null) {
            clickCity(target,data);
        }
    });

    input.addEventListener("input",() => getDropdownAutocomplete(data));
};

 getDate(
    (data) =>progressDate(data),     
    () => console.log('er')
 );