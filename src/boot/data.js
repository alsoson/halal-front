// import axios from 'axios'
// import cheerio from 'cheerio'
// // import fs from 'fs'

// const restaurant = []

// const fetchData = async () => {
//   try {
//     const { data } = await axios.get('https://wdaweb.github.io/')
//     const $ = cheerio.load(data)
//     $('#general .col-md-3').each(function () {
//       courses.push(
//         [
//           'https://wdaweb.github.io/' + $(this).find('img').attr('src').slice(2),
//           ...$(this).text().replace(/\t/g, '').split('\n').filter(text => text.length > 0)
//         ]
//       )
//     })
//   } catch (error) {
//     console.log(error)
//   }
//   console.log(restaurant)
// }

// export default {
//   fetchData,
//   restaurant
//   // replyCourses
// }
