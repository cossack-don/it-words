// массив со всеми словами
import arrayItemsWords from '@/store/arrayEnglishWords/wordsArray.js'


const state = () => ({
  arrayItemsWords,
  searchString: '',
  testString: '',
})

export default state