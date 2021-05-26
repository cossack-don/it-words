import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// массив со всеми словами

import arrayItemsWords from '@/store/arrayEnglishWords/wordsArray.js'

// 
// import state from '@/store/state/state.js'
export default new Vuex.Store({
  modules: {


    // 
    // Доработка по функционалу.
    // Проверить все геттеры,мутации , нужны ли все , лишние очистить
  },
  state: {
    arrayItemsWords,
    searchString: '',
    testString: ''
    // РАЗОБРАТЬСЯ С ЧЕКБОКСОМ СЕТТЕРАМИ ГЕТТЕРАМИ И УДАЛИТЬ ЧТО ЛИШНЕЕ
  },

  // 
  // 
  // 
  getters: {
    // возвращаю все слова в компонент main
    GETTERS_GET_ARRAY_WORDS(state) {
      return state.arrayItemsWords
    },

    // GETTERS_SEARCH_INPUT(state) {
    //   console.log(state.searchArray, 'этой переменной нету в сторе')
    //   // если возвращаю arrayItemsWords - ломается поиск
    //   console.log(state.s)
    //   return state.s = ''
    // },

    GETTERS_FLAG_CHECKBOX(state) {
      // return state.arrayItemsWords;
      return true;
    },

    // GETTERS_ON_CLICK_BTN_CLEAN_VALUE_SEARCH(state) {
    //   console.log(state.searchString, 33)
    //   return state.searchString
    // },
  },

  // 
  // 
  // 
  mutations: {
    cleanMessage(state, message) {
      state.testString = message
      state.testString = ''
      if (state.testString === '') {
        state.arrayItemsWords.forEach(i => {
          i.show = true
        });

      }
      // console.log(state.testString)
    },

    MUTATUINS_RANDOM_WORDS(state) {
      // меняем порядок индексов в массиве 
      state.arrayItemsWords.sort(() => Math.random() - 0.5);
    },

    // поиск по словам
    MUTATUINS_SEARCH_INPUT(state, message) {
      state.testString = message
      // valueSearchInput = valueSearchInput = ''
      // ищет по анг буквам переводя в русские ghbdtn = привет
      function auto_layout_keyboard(str) {
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

      // console.log(valueSearchInput);
      // value получаем из компонента main search words значение инпута через v-modal
      state.searchString = auto_layout_keyboard(state.testString.toLowerCase())
      console.log(state.searchString, 'ww')

      // if (state.searchString.length >= 1) {
      //   console.log(333)
      // }
      if (state.searchString) {

        state.arrayItemsWords.forEach(item => {
          // if (item.translate.toLowerCase().includes(state.searchString.trim().toLowerCase())) {
          //   // если фолс, выводим сообщение что ничего не найдено
          // }
          // console.log(item.translate.toLowerCase().includes(state.searchString.trim().toLowerCase()))
          item.show = item.translate.toLowerCase().includes(state.searchString.trim().toLowerCase());
        })

      } else {
        state.arrayItemsWords.forEach(i => {
          i.show = true
        });

      }

    },
    MUTATUINS_FLAG_CHECKBOX(state, id) {

      state.arrayItemsWords.find(item => {

        if (item.id === id) {
          item.done = !item.done
        }
      })
    },

    // MUTATUINS_ON_CLICK_BTN_CLEAN_VALUE_SEARCH(state, value) {
    //   state.s = value

    //   // value = value = ''
    //   console.log(value, 'mut', 8888)
    // },
  },

  // MUTATUINS_ON_CLICK_BTN_DELETE_ITEM(state,indexItemaCard) {
  //   console.log(indexItemaCard)
  //   state.arrayItemsWords.splice(indexItemaCard, 1);
  // }

  actions: {
    TEST({ commit }) {
      commit('cleanMessage')
    },
    ACTION_RANDOM_WORDS({ commit }) {
      commit('MUTATUINS_RANDOM_WORDS')
    },
    ACTION_ON_CLICK_BTN_DELETE_ITEM({ commit, state }, indexItemaCard) {
      console.log(`index - №${indexItemaCard}`, "индекс шаблона-карточки для слова массив - arrayItems от него индекс");
      state.arrayItemsWords.splice(indexItemaCard, 1);
    },
    ACTION_SEARCH_INPUT({ commit }, valueSearchInput) {
      commit('MUTATUINS_SEARCH_INPUT', valueSearchInput)
    },

    // ACTION_ON_CLICK_BTN_CLEAN_VALUE_SEARCH({ commit }, value) {
    //   // console.log(value, 31)
    //   commit('MUTATUINS_ON_CLICK_BTN_CLEAN_VALUE_SEARCH', value)
    // },

    ACTION_FLAG_CHECKBOX({ commit }, id) {
      commit('MUTATUINS_FLAG_CHECKBOX', id)
    }
  },

})





      // function auto_layout_keyboard(str) {
      //   replacer = {
      //     "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г",
      //     "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ъ", "a": "ф", "s": "ы",
      //     "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
      //     ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и",
      //     "n": "т", "m": "ь", ",": "б", ".": "ю", "/": "."
      //   };

      //   return str.replace(/[A-z/,.;\'\]\[]/g, function (x) {
      //     return x == x.toLowerCase() ? replacer[x] : replacer[x.toLowerCase()].toUpperCase();
      //   });
      // }