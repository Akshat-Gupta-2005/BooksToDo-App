const apiFetch = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    const articles = data.articles
    return articles

module.exports = apiFetch