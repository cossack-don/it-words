<template>
  <div>
    <Header />
    <Main />
    <Footer />
    <!-- можно еще сделать вкладку - переводчик из API , типо таба можно добавить еще
    кнопку сортировка по алфовиту !! -->
    <!-- https://cloud.yandex.ru/services/translate -->

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <!-- <h1>словарь тех слов анг</h1>
    Поиск <input type="text" /> <button>поиск</button>
    <button>кнопка рандомно слова раскидать</button> <br />

    поле для нового слова <input type="text" />
    <button>добавить новое слово</button>
    <!--  -->
    <!-- <div
      style="
        border: solid red 1px;
        display: flex;
        justify-content: space-between;
      "
    >
      <div>
        <p>слово анг</p>
        <br />
        <p>перевод слова</p>
      </div>
      <div>
        <input type="checkbox" /> отметить что выучил <br />
        <button>btn</button> удалить из общего массива это слово
      </div>
    </div>
    <hr />
    <div
      style="
        border: solid red 1px;
        display: flex;
        justify-content: space-between;
      "
    >
      <div>
        <p>слово анг</p>
        <br />
        <p>перевод слова</p>
      </div> -->
      <!-- <div>
        <input type="checkbox" /> отметить что выучил <br />
        <button>btn</button> удалить из общего массива это слово
      </div> -->
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Main from "@/components/main/Main.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
</style>