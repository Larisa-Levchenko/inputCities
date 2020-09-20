'use strict';

const input = document.getElementById('select-cities');
const closeBtn = document.querySelector('.close-button');
const mainBtn = document.querySelector('.button');
const dropdownDefault = document.querySelector('.dropdown-lists__list--default');
const dropdownSelect = document.querySelector('.dropdown-lists__list--select');
const dropdownAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete');
const dropdown = document.querySelectorAll(".dropdown-lists__col");

const data = {
    "RU": [
        {
            "country": "Россия",
            "count": "144500000",
            "cities": [
                {
                    "name": "Рязань",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Москва",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Санкт-Петербург",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Краснодар",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Екатеринбург",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Ростов-на-Дону",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Воронеж",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Германия",
            "count": 82175684 ,
            "cities": [
                {
                    "name": "Берлин",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Мюнхен",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Франкфурт-на-Майне",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Кёльн",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "Англия",
            "count": 53012456,
            "cities": [
                {
                    "name": "Лондон",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Манчестер",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Эдинбург",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Бристоль",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "EN": [
        {
            "country": "Russia",
            "count": "144500000",
            "cities": [
                {
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moscow",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "St Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Yekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostov-on-Don",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Voronezh",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Germany",
            "count": 82175684 ,
            "cities": [
                {
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "Munich",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Cologne",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "United Kingdom",
            "count": 53012456,
            "cities": [
                {
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ],
    "DE": [
        {
            "country": "Russland",
            "count": "144500000",
            "cities": [
                {
                    "name": "Ryazan",
                    "count": "538962",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C"
                },
                {
                    "name": "Moskau",
                    "count": "12615882",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
                },
                {
                    "name": "Saint Petersburg",
                    "count": "5383968",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Krasnodar",
                    "count": "918145",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
                },
                {
                    "name": "Jekaterinburg",
                    "count": "1484456",
                    "link": "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Rostow",
                    "count": "1130305",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83"
                },
                {
                    "name": "Woronesch",
                    "count": "1054537",
                    "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6"
                }
            ]

        },
        {
            "country": "Deutschland",
            "count": 82175684 ,
            "cities": [
                {
                    "name": "Berlin",
                    "count": "3613495",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD"
                },
                {
                    "name": "München",
                    "count": "1456039",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD"
                },
                {
                    "name": "Frankfurt",
                    "count": "736414",
                    "link": "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%84%D1%83%D1%80%D1%82-%D0%BD%D0%B0-%D0%9C%D0%B0%D0%B9%D0%BD%D0%B5"
                },
                {
                    "name": "Köln",
                    "count": "1080394",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%91%D0%BB%D1%8C%D0%BD"
                }
            ]
        },
        {
            "country": "England",
            "count": 53012456,
            "cities": [
                {
                    "name": "London",
                    "count": " 8869898",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"
                },
                {
                    "name": "Manchester",
                    "count": "545500",
                    "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%87%D0%B5%D1%81%D1%82%D0%B5%D1%80"
                },
                {
                    "name": "Edinburgh",
                    "count": "488100",
                    "link": "https://ru.wikipedia.org/wiki/%D0%AD%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3"
                },
                {
                    "name": "Bristol",
                    "count": "567111",
                    "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C"
                }
            ]

        }
    ]
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

const clickCity = (target) => {
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

const getDropdownDefault = () => {
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

const getDropdownSelect = (target) => {
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

};

const getDropdownAutocomplete = () => {
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
                  <div class="dropdown-lists__city">${city.name}</div>
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
        getDropdownDefault();
    }
};

document.body.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('input') !== null) {
        getDefault();
        getDropdownDefault();
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
            getDropdownSelect(target);
        } else {
            getDropdownDefault();
        }
    }
    if (target.closest(".dropdown-lists__line") !== null) {
        clickCity(target);
    }
});

input.addEventListener("input", getDropdownAutocomplete);