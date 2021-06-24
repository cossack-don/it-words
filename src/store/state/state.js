// массив со всеми словами
import arrayItemsWords from '@/store/arrayEnglishWords/wordsArray.js'


const state = () => ({
  arrayItemsWords,
  searchString: '',
  testString: '',
  flagMessageNoWord: false,

})

export default state