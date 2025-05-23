import axios from 'axios'
// const apiFetch = async (url) => {
//     const response = await fetch(url)
//     const data = await response.json()
//     const articles = await data.items
//     return articles
// }

const isBookMarked = (arr, id) => {
  if (arr.some(e => e.id === id)) {
    return true;
  } else {
    return false;
  }
}

const apiFetch = async (url) => {
  try {
    const res = await axios.get(url);
    const items = res.data.items || []

    const res2 = await axios.get("http://localhost:5000/api/books")
    const savedBooks = res2.data

    items.forEach((e) => {
      if (isBookMarked(savedBooks,e.id)){
        e.bookMarked = true
      }else{
        e.bookMarked = false
      }
    })

    // console.log(items)
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};


export default apiFetch



