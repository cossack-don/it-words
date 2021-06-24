<template>
  <header class="header">
    <h1 class="header__title">
      Словарь английских-технических слов. <br />
      Учи английский сам.
    </h1>

    <div class="header__wrapper">
      <div class="header__btns">
        <div>
          <router-link to="/page-translate-word" class="header__btn-randow-word"
            >Page 2</router-link
          >
        </div>
        <div>
          <button class="header__btn-randow-word" @click="sortEnglishWords">
            Cортировка ENG words &#9660; &#9650;
          </button>
        </div>
        <div>
          <button class="header__btn-randow-word" @click="sortRussianWords">
            Cортировка RU words &#9660; &#9650;
          </button>
        </div>

        <div>
          <button class="header__btn-randow-word" @click="cleanAllCheckBox">
            Удалить все галочки &#10003;
          </button>
        </div>
        <div>
          <button @click="onClickRandomWords" class="header__btn-randow-word">
            Случайный <br />
            порядок слов
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      notMobiveWidth: true,
    };
  },
  computed: {},
  methods: {
    ...mapActions([
      "ACTION_RANDOM_WORDS",
      "ACTION_SORT_FOR_ENG_WORDS_A_Z",
      "ACTION_SORT_FOR_RUSS_WORDS_A_Z",
      "ACTION_CLEAN_ALL_CHECKBOX",
    ]),
    onClickRandomWords() {
      this.ACTION_RANDOM_WORDS();
    },
    sortEnglishWords() {
      this.ACTION_SORT_FOR_ENG_WORDS_A_Z();
    },
    sortRussianWords() {
      this.ACTION_SORT_FOR_RUSS_WORDS_A_Z();
    },
    cleanAllCheckBox() {
      this.ACTION_CLEAN_ALL_CHECKBOX();
    },
  },
};
</script>

