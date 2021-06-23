const getters = {


    // _____________________________________________________________________++++++
    ACTION_CLEAN_ON_CLICL_BTN_VALUE_INPUT({ commit }) {
        commit('MUTATUINS_CLEAN_WORDS')
    },

    // _____________________________________________________________________++++++
    ACTION_RANDOM_WORDS({ commit }) {
        commit('MUTATUINS_RANDOM_WORDS')
    },

    // _____________________________________________________________________+++++
    ACTION_ON_CLICK_BTN_DELETE_ITEM({ commit }, indexItemaCard) {
        // старый вариант - плохой, что закоментирован
        // console.log(`index - №${indexItemaCard}`, "индекс шаблона-карточки для слова массив - arrayItems от него индекс");
        // state.arrayItemsWords.splice(indexItemaCard, 1);
        commit('MUTATUINS_ON_CLICK_BTN_DELETE_ITEM', indexItemaCard)
    },

    // _____________________________________________________________________+++
    ACTION_SEARCH_INPUT({ commit }, valueSearchInput) {
        commit('MUTATUINS_SEARCH_INPUT', valueSearchInput)
    },


    // _____________________________________________________________________+++
    ACTION_ARRAY_WORDS({ commit }) {
        commit('MUTATUINS_ARRAY_WORDS')
    },

    // _____________________________________________________________________+++
    ACTION_FLAG_CHECKBOX({ commit }, id) {
        commit('MUTATUINS_FLAG_CHECKBOX', id)
    },
    // _____________________________________________________________________+++
    ACTION_SORT_FOR_ENG_WORDS_A_Z({ commit }) {
        commit('MUTATUINS_SORT_FOR_ENG_WORDS_A_Z')
    },
    // _____________________________________________________________________+++

    ACTION_SORT_FOR_RUSS_WORDS_A_Z({ commit }) {
        commit('MUTATUINS_SORT_FOR_RUSS_WORDS_A_Z')
    },

    // _____________________________________________________________________+++

    ACTION_CLEAN_ALL_CHECKBOX({ commit }) {
        commit('MUTATUINS_CLEAN_ALL_CHECKBOX')
    }
}

export default getters