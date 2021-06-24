<template>
  <div class="page-one">
    <Header />
    <Main />
    <!-- <Footer /> -->
    <div class="wrapper-array-up">
      <button
        v-show="showArray"
        class="btn-array-top-page"
        @click="btnScrollTopPage"
      >
        <div class="icon-svg-array-up">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 240.835 240.835"
            style="enable-background: new 0 0 240.835 240.835"
            xml:space="preserve"
          >
            <g>
              <path
                id="Expand_Less"
                d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155
		c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155
		L129.007,57.819z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Main from "@/components/main/Main.vue";
// import Footer from "@/components/footer/Footer.vue";

export default {
  components: {
    Header,
    Main,
    // Footer,
  },

  computed: {
    showArray() {
      window.addEventListener("scroll", function () {
        let wrapperBtnArrayUp = document.querySelector(".wrapper-array-up");

        if (pageYOffset > 300) {
          wrapperBtnArrayUp.style.display = "block";
        } else {
          wrapperBtnArrayUp.style.display = "none";
        }
      });

      return true;
    },
  },
  methods: {
    btnScrollTopPage() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style>
.page-one {
  position: relative;
}
.wrapper-array-up {
  position: fixed;
  top: 110px;
  display: none;
}
.btn-array-top-page {
  background: #00ff00;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  color: #ffffff;

  transition: 0.5s;
}
.btn-array-top-page:hover {
  cursor: pointer;
  transition: 0.5s;
  background: #e4d504;
}
.icon-svg-array-up {
}
.icon-svg-array-up svg {
  width: 40px;
  height: 40px;
  fill: #ffffff;
}
</style>