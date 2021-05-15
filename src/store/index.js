import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// https://webdevblog.ru/vuex-glubokoe-pogruzhenie/


import arrayItemsWords from '@/store/arrayEnglishWords/wordsArray.js'
export default new Vuex.Store({
  state: {
    arrayItemsWords,
    searchString: '',
    arrayWordForSearch: [],
    m: []

  },
  getters: {
    // возвращаю все слова в компонент
    GETTERS_GET_ARRAY_WORDS(state) {
      // if (state.arrayWordForSearch.length === 0) {

      //   return state.arrayWordForSearch = state.arrayItemsWords
      // } else {
      //   return state.arrayWordForSearch
      // }
      return state.arrayItemsWords

    },
    GETTERS_D(state) {

      return state.arrayWordForSearch
    },
  },


  mutations: {
    MUTATUINS_RANDOM_WORDS(state) {
      // меняем порядок индексов в массиве 
      state.arrayItemsWords.sort(() => Math.random() - 0.5);
    },

    MUTATUINS_SEARCH_INPUT(state, value) {
      // https://gitlab.com/DanilChushko/vue-lessons/-/blob/lesson-1-hw/src/components/UsersSearch.vue
      state.searchString = value.toLowerCase()
      console.log(value,'input-value');

      if (state.searchString) {
        state.arrayItemsWords.forEach(item => {
            item.show = item.translate.toLowerCase().includes(state.searchString.trim().toLowerCase());
        })
      } else {
        state.arrayItemsWords.forEach(i => i.show = true);
      }




















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
      // state.arrayWordForSearch = state.arrayItemsWords.filter(item => {
      //   // 

      //   //    state.searchString = ''
      //   if (item.translate.toLowerCase().includes(state.searchString.trim().toLowerCase())) {

      //     return item

      //   }

      // })

      // if (state.arrayWordForSearch.length < 1) {
      //   state.searchString = ''
      //   console.log(state.searchString)
      // }

      // state.arrayItemsWords = state.arrayWordForSearch
      // console.log(state.arrayWordForSearch)
      // const arr = [];
      // state.arrayItemsWords.forEach(item => {
        // arr.push(item.translate)
        // console.log(item.translate.includes(state.searchString))
        // if (item.translate === state.searchString) {
        //   console.log(item.translate)
        // }
      // });
      // const newarr = arr.filter(item => {

      //   return item.includes(state.searchString)
      // })

      // state.arrayItemsWords.filter(item => {

      //   newarr.forEach(itemTwo => {
      //     if (item.translate === itemTwo) {


      //       // console.log(state.arrayWordForSearch.push(item))
      //       // console.log(state.arrayWordForSearch.push(item))
      //       // state.arrayItemsWords,
      //       // console.log(ar)
      //     }

      //   })
      // console.log(state.arrayItemsWords)
      // })

      // console.log('3333', state.arrayItemsWords)
      // state.arrayWordForSearch = arrayWithTransaleWords.filter(nameWord => {
      //   return nameWord.toLowerCase().includes(state.searchString.trim().toLowerCase())
      // })
      // console.log(state.arrayWordForSearch)
      // state.arrayItemsWords.filter(item => {
      //   if (item.translate === state.arrayWordForSearch[0]) {
      //     state.m.push(item)
      //     console.log(item, '5555555')
      //     // добавлять в массив или копировать это значение !!!!!!!!!!!!!!
      //   }
      // })
      // console.log(state.m, 33333)
      // state.arrayWordForSearch.forEach((item, index) => {

      //   if (item === state.arrayItemsWords[index].translate) {
      //     console.log(35)
      //   }
      // })
      // console.log(state.arrayWordForSearch, state.arrayItemsWords)

      // state.arrayItemsWords.forEach((item, index) => {

      // console.log(state.arrayWordForSearch, 'ЭТО МАССИВ?')
      // console.log(...state.arrayWordForSearch)

      //   if (item.translate === state.arrayWordForSearch[0]) {
      //     console.log(state.arrayWordForSearch[0])
      //     console.log(item, 'оно?')
      //     console.log()
      //     state.arrayWordForSearch = item
      //   }
      // })


      // меняем порядок индексов в массиве 
      // state.arrayItemsWords.sort(() => Math.random() - 0.5);
      // console.log(arrayWithTransaleWords)
    // },
    // MUTATUINS_CHANGE_DONE_ITEM(state) {
    //   // меняем порядок индексов в массиве 
    //   state.arrayItems.forEach(item => {
    //     item.done = !item.done
    //     // console.log(item.done)
    //   })
    // },
    // MUTATUINS_ON_CLICK_BTN_DELETE_ITEM(state, indexItemaCard) {
    // удаляем Item карточку слова
    // console.log(`index - №${indexItemaCard}`, "индекс шаблона-карточки для слова массив - arrayItems от него индекс");
    // state.arrayItems = 

    //    Удаляет 1 элемент по индексу 3
    // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
    // var removed = myFish.splice(3, 1);

    },

  },



  actions: {
    ACTION_RANDOM_WORDS({ commit }) {
      commit('MUTATUINS_RANDOM_WORDS')
    },
    ACTION_ON_CLICK_BTN_DELETE_ITEM({ commit, state }, indexItemaCard) {
      console.log(`index - №${indexItemaCard}`, "индекс шаблона-карточки для слова массив - arrayItems от него индекс");
      state.arrayItemsWords.splice(indexItemaCard, 1);



    },
    // ACTION_CHANGE_DONE_ITEM({ commit }) {
    //   commit('MUTATUINS_CHANGE_DONE_ITEM')
    // },
  },

})
