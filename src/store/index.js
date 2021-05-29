import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




// COMPONENTS GETTERS,ACTIONS,STATE,MUTATUINS
import stateComponent from '@/store/state/state.js'
import getters from '@/store/getters/getters.js'
import actions from '@/store/actions/actions.js'
import mutations from '@/store/mutatuins/mutatuins.js'

export default new Vuex.Store({

  state: {
    // arrayItemsWords,
    // searchString: '',
    // testString: '',
    stateComponent
  },
  getters,
  mutations,
  actions,
  // 
  // 
  // 
  // getters: {
  //   // _____________________________________________________________________++++
  //   // возвращаю все слова в компонент main
  //   GETTERS_GET_ARRAY_WORDS(state) {
  //     return state.stateComponent.arrayItemsWords
  //   },
  // },

  // 
  // 
  // 
  // mutations: {
  //   // _____________________________________________________________________+++++
  //   // Очистка инпута на кнопку при клитке
  //   MUTATUINS_CLEAN_WORDS(state, valueSearch) {

  //     // кладем значение из компонента в стор переменную
  //     state.stateComponent.searchString = valueSearch

  //     // очищаем поле инпута
  //     state.stateComponent.searchString = ''

  //     // если поле пустое, возвращаем массив значений слов
  //     if (state.stateComponent.searchString === '') {
  //       state.stateComponent.arrayItemsWords.forEach(i => {
  //         i.show = true
  //       });
  //     }

  //   },
  //   // _____________________________________________________________________++++++
  //   MUTATUINS_RANDOM_WORDS(state) {
  //     // меняем порядок индексов в массиве 
  //     state.stateComponent.arrayItemsWords.sort(() => Math.random() - 0.5);
  //   },

  //   // _____________________________________________________________________++++
  //   // поиск по словам
  //   MUTATUINS_SEARCH_INPUT(state, valueSearch) {

  //     // МЕТОД - ищет по анг буквам переводя в русские ghbdtn = привет
  //     function autoLayoutKeybord(str) {
  //       const replacer = {
  //         "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г",
  //         "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ъ", "a": "ф", "s": "ы",
  //         "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
  //         ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и",
  //         "n": "т", "m": "ь", ",": "б", ".": "ю", "/": "."
  //       };

  //       return str.replace(/[A-z/,.;\'\]\[]/g, function (x) {
  //         return x == x.toLowerCase() ? replacer[x] : replacer[x.toLowerCase()].toUpperCase();
  //       });
  //     }


  //     // value получаем из компонента main search words значение инпута через v-modal
  //     // получаем данные из компонента и кладем в переменную стора серч стринг
  //     state.stateComponent.searchString = autoLayoutKeybord(valueSearch.toLowerCase())


  //     if (state.stateComponent.searchString) {
  //       // если не удаляли слова из списка, показываем
  //       state.stateComponent.arrayItemsWords.forEach(item => {
  //         // ТУТ ГДЕ-ТО СДЕЛАТЬ ПРОВЕРКУ НА ТО ЧТО ЕСЛИ СЛОВО НЕ НАШЛОСЬ, ВЫВОДИТЬ ОПОВЕЩЕНИЕ ТАКОГО СЛОВА НЕТУ, ДОРАБОТАТЬ!
  //         item.show = item.translate.toLowerCase().includes(state.stateComponent.searchString.trim().toLowerCase());
  //       })

  //     } else {
  //       // Скрываем слово которое удаляли (флаг)
  //       state.stateComponent.arrayItemsWords.forEach(i => {
  //         i.show = true
  //       });
  //     }

  //   },
  //   // _____________________________________________________________________+++
  //   MUTATUINS_FLAG_CHECKBOX(state, id) {
  //     // проходимся циклом до первого нужного индекса и ставим тру/фолс
  //     state.stateComponent.arrayItemsWords.find(item => {

  //       if (item.id === id) {
  //         item.done = !item.done
  //       }
  //     })
  //   },

  //   // _____________________________________________________________________++++++
  //   MUTATUINS_ARRAY_WORDS(state) {
  //     state.stateComponent.arrayItemsWords = state.stateComponent.arrayItemsWords
  //   },

  //   // _____________________________________________________________________++++
  //   MUTATUINS_ON_CLICK_BTN_DELETE_ITEM(state, indexItemCard) {
  //     state.stateComponent.arrayItemsWords.splice(indexItemCard, 1);
  //   }
  // },


  // actions: {
  //   // _____________________________________________________________________++++++
  //   ACTION_CLEAN_ON_CLICL_BTN_VALUE_INPUT({ commit }) {
  //     commit('MUTATUINS_CLEAN_WORDS')
  //   },

  //   // _____________________________________________________________________++++++
  //   ACTION_RANDOM_WORDS({ commit }) {
  //     commit('MUTATUINS_RANDOM_WORDS')
  //   },

  //   // _____________________________________________________________________+++++
  //   ACTION_ON_CLICK_BTN_DELETE_ITEM({ commit }, indexItemaCard) {
  //     // старый вариант - плохой, что закоментирован
  //     // console.log(`index - №${indexItemaCard}`, "индекс шаблона-карточки для слова массив - arrayItems от него индекс");
  //     // state.arrayItemsWords.splice(indexItemaCard, 1);
  //     commit('MUTATUINS_ON_CLICK_BTN_DELETE_ITEM', indexItemaCard)
  //   },

  //   // _____________________________________________________________________+++
  //   ACTION_SEARCH_INPUT({ commit }, valueSearchInput) {
  //     commit('MUTATUINS_SEARCH_INPUT', valueSearchInput)
  //   },


  //   // _____________________________________________________________________+++
  //   ACTION_ARRAY_WORDS({ commit }) {
  //     commit('MUTATUINS_ARRAY_WORDS')
  //   },

  //   // _____________________________________________________________________+++
  //   ACTION_FLAG_CHECKBOX({ commit }, id) {
  //     commit('MUTATUINS_FLAG_CHECKBOX', id)
  //   },
  // },

})





