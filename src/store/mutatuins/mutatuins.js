const mutations = {


    // _____________________________________________________________________+++++
    // Очистка инпута на кнопку при клитке
    MUTATUINS_CLEAN_WORDS(state, valueSearch) {

        // кладем значение из компонента в стор переменную
        state.searchString = valueSearch

        // очищаем поле инпута
        state.searchString = ''

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


        if (state.searchString) {
            // если не удаляли слова из списка, показываем
            state.arrayItemsWords.forEach(item => {
                // ТУТ ГДЕ-ТО СДЕЛАТЬ ПРОВЕРКУ НА ТО ЧТО ЕСЛИ СЛОВО НЕ НАШЛОСЬ, ВЫВОДИТЬ ОПОВЕЩЕНИЕ ТАКОГО СЛОВА НЕТУ, ДОРАБОТАТЬ!
                item.show = item.translate.toLowerCase().includes(state.searchString.trim().toLowerCase());
            })

        } else {
            // Скрываем слово которое удаляли (флаг)
            state.arrayItemsWords.forEach(i => {
                i.show = true
            });
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
    }


}

export default mutations