<template>
  <header class="header">
    <h1 class="header__title">
      Словарь английских-технических слов. <br />
      Учи английский сам.
    </h1>

    <div class="header__wrapper">
      <!-- ICONS -->
      <div class="header__icons-mobile icons-mobile">
        <router-link to="/page-translate-word">
          <div class="icons-mobile__icon">Page 2</div></router-link
        >

        <div class="icons-mobile__icon" @click="sortEnglishWords">
          EN <br />
          &#9660; &#9650;
        </div>
        <div class="icons-mobile__icon" @click="sortRussianWords">
          RU <br />
          &#9660; &#9650;
        </div>
        <div class="icons-mobile__icon" @click="cleanAllCheckBox">
          Delet all &#10003;
        </div>
        <div class="icons-mobile__icon" @click="onClickRandomWords">
          Ran-m words
        </div>
      </div>
      <!-- ICONS -->
      <div class="header__btns">
        <!-- LINK 2 PAGE -->
        <div>
          <router-link to="/page-translate-word" class="header__btn-randow-word"
            >Page 2</router-link
          >
        </div>

        <!-- SORT ENGLISH WORDS -->
        <div>
          <button class="header__btn-randow-word" @click="sortEnglishWords">
            Cортировка ENG words &#9660; &#9650;
          </button>
        </div>

        <!-- SORT RUSSIAN WORDS -->
        <div>
          <button class="header__btn-randow-word" @click="sortRussianWords">
            Cортировка RU words &#9660; &#9650;
          </button>
        </div>

        <!-- DELETE ALL CHECKBOXS -->
        <div>
          <button class="header__btn-randow-word" @click="cleanAllCheckBox">
            Удалить все галочки &#10003;
          </button>
        </div>

        <!-- BTN RANDOM WORDS -->
        <div>
          <button @click="onClickRandomWords" class="header__btn-randow-word">
            Случайный <br />
            порядок слов
          </button>
        </div>
        <!-- END BTN RANDOM WORDS -->
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
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

