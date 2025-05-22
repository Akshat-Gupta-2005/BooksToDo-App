import axios from 'axios'
// const apiFetch = async (url) => {
//     const response = await fetch(url)
//     const data = await response.json()
//     const articles = await data.items
//     return articles
// }

const apiFetch = async (url) => {
  try {
    const res = await axios.get(url);
    const items = res.data.items || []
    items.forEach((e)=>{
      e.bookMarked = false
    })
    console.log(items)
    return items;
  } catch (err) {
    console.error(err);
    return []; // optional: return fallback value
  }
};


export default apiFetch