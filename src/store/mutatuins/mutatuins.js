const mutations = {


    // _____________________________________________________________________+++++
    // Очистка инпута на кнопку при клитке
    MUTATUINS_CLEAN_WORDS(state, valueSearch) {

        // кладем значение из компонента в стор переменную
        state.searchString = valueSearch

        // очищаем поле инпута
        state.searchString = ''

        // удаляем сообщение о том что слова нету
        state.flagMessageNoWord = false

        // если поле пустое, возвращаем массив значений слов
        if (state.searchString === '') {
            state.arrayItemsWords.forEach(i => {
                i.show = true
            });
        }

    },
    // _____________________________________________________________________++++++
    MUTATUINS_RANDOM_WORDS(state) {
        // меняем порядок индексов в массиве 
        state.arrayItemsWords.sort(() => Math.random() - 0.5);
    },

    // _____________________________________________________________________++++
    // поиск по словам
    MUTATUINS_SEARCH_INPUT(state, valueSearch) {

        // МЕТОД - ищет по анг буквам переводя в русские ghbdtn = привет
        function autoLayoutKeybord(str) {
            const replacer = {
                "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г",
                "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ъ", "a": "ф", "s": "ы",
                "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
                ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и",
                "n": "т", "m": "ь", ",": "б", ".": "ю", "/": "."
            };

            return str.replace(/[A-z/,.;\'\]\[]/g, function (x) {
                return x == x.toLowerCase() ? replacer[x] : replacer[x.toLowerCase()].toUpperCase();
            });
        }


        // value получаем из компонента main search words значение инпута через v-modal
        // получаем данные из компонента и кладем в переменную стора серч стринг
        state.searchString = autoLayoutKeybord(valueSearch.toLowerCase())

        // пустой массив,куда кладем boolean значение каждого слова, при поиске в инпуте
        // если в поиске не находится слово, все слова возвращают false
        const arrayOfNotFoundWords = [];

        if (state.searchString) {
            // если не удаляли слова из списка, показываем

            state.arrayItemsWords.forEach(item => {

                arrayOfNotFoundWords.push(item.translate.toLowerCase().includes(state.searchString.trim().toLowerCase()))


                item.show = item.translate.toLowerCase().includes(state.searchString.trim().toLowerCase());
            })

        } else {
            // Скрываем слово которое удаляли (флаг)
            state.arrayItemsWords.forEach(i => {
                i.show = true
            });
        }


        // если таких слов нету, вывожу сообщение , смотрю по boolean
        // arrayOfNotFoundWords массив с true - false , если весь массив с false я захожу в if т.к. тру при every
        if (arrayOfNotFoundWords.every(item => item === false)) {
            // если пустая строка поиска я выхожу  и отключаю сообщение
            if (state.searchString === '') {
                state.flagMessageNoWord = false
                return false
            }
            // если слова не находит, показываю сообщение
            state.flagMessageNoWord = true
        }


    },
    // _____________________________________________________________________+++
    MUTATUINS_FLAG_CHECKBOX(state, id) {
        // проходимся циклом до первого нужного индекса и ставим тру/фолс
        state.arrayItemsWords.find(item => {

            if (item.id === id) {
                item.done = !item.done
            }
        })
    },

    // _____________________________________________________________________++++++
    MUTATUINS_ARRAY_WORDS(state) {
        state.arrayItemsWords = state.arrayItemsWords
    },

    // _____________________________________________________________________++++
    MUTATUINS_ON_CLICK_BTN_DELETE_ITEM(state, indexItemCard) {
        state.arrayItemsWords.splice(indexItemCard, 1);
    },
    // _____________________________________________________________________++++
    MUTATUINS_SORT_FOR_ENG_WORDS_A_Z(state) {
        let flagForSortReverse = false;

        state.arrayItemsWords.sort(function (a, b) {
            if (a.word.toLowerCase() > b.word.toLowerCase()) {
                flagForSortReverse = true;
                return 1;
            }
            if (a.word.toLowerCase() < b.word.toLowerCase()) {
                flagForSortReverse = false;
                return -1;
            }

            return 0;

        })

        if (flagForSortReverse) {
            state.arrayItemsWords.reverse();
        }

    },
    // _____________________________________________________________________++++
    MUTATUINS_SORT_FOR_RUSS_WORDS_A_Z(state) {
        let flagForSortReverse = false;

        state.arrayItemsWords.sort(function (a, b) {
            if (a.translate.toLowerCase() > b.translate.toLowerCase()) {
                flagForSortReverse = true;
                return 1;
            }
            if (a.translate.toLowerCase() < b.translate.toLowerCase()) {
                flagForSortReverse = false;
                return -1;
            }

            return 0;

        })

        if (flagForSortReverse) {
            state.arrayItemsWords.reverse();
        }
    },
    // _____________________________________________________________________++++

    MUTATUINS_CLEAN_ALL_CHECKBOX(state) {

        const arrayAllInputCheckbox = document.querySelectorAll(".input-checkbox-hide-item");

        arrayAllInputCheckbox.forEach((item) => {
            item.checked = false
        });

        state.arrayItemsWords.forEach(item => {
            item.done = false
        })
    }
}

export default mutations