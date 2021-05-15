<template>
  <div>
    <Header />
    <Main />
    <Footer />
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