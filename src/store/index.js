import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// массив со всеми словами

import arrayItemsWords from '@/store/arrayEnglishWords/wordsArray.js'

// 
// import state from '@/store/state/state.js'
export default new Vuex.Store({
  modules: {



  },
  state: {
    arrayItemsWords,
    searchString: '',

  },

  // 
  // 
  // 
  getters: {
    // возвращаю все слова в компонент main
    GETTERS_GET_ARRAY_WORDS(state) {
      return state.arrayItemsWords
    },
  },

  // 
  // 
  // 
  mutations: {

    MUTATUINS_RANDOM_WORDS(state) {
      // меняем порядок индексов в массиве 
      state.arrayItemsWords.sort(() => Math.random() - 0.5);
    },

    // поиск по словам
    MUTATUINS_SEARCH_INPUT(state, value) {
      // value получаем из компонента main search words значение инпута через v-modal
      state.searchString = value.toLowerCase()
      if (state.searchString) {
        state.arrayItemsWords.forEach(item => {
          item.show = item.translate.toLowerCase().includes(state.searchString.trim().toLowerCase());

        })
      } else {
        state.arrayItemsWords.forEach(i => i.show = true);
      }

    },

    // MUTATUINS_CLEAN_VALUE_SEARCH(state) {

    //   state.searchString
    // },
  },

  // MUTATUINS_ON_CLICK_BTN_DELETE_ITEM(state,indexItemaCard) {
  //   console.log(indexItemaCard)
  //   state.arrayItemsWords.splice(indexItemaCard, 1);
  // }

  actions: {
    ACTION_RANDOM_WORDS({ commit }) {
      commit('MUTATUINS_RANDOM_WORDS')
    },
    ACTION_ON_CLICK_BTN_DELETE_ITEM({ commit, state }, indexItemaCard) {
      console.log(`index - №${indexItemaCard}`, "индекс шаблона-карточки для слова массив - arrayItems от него индекс");
      state.arrayItemsWords.splice(indexItemaCard, 1);
    },
    ACTION_SEARCH_INPUT({ commit }) {
      commit('MUTATUINS_SEARCH_INPUT')
    },

    // ACTION_CLEAN_VALUE_SEARCH({ commit }) {
    //   commit('MUTATUINS_CLEAN_VALUE_SEARCH')
    // },
  },

})





      // state.arrayWordForSearch
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