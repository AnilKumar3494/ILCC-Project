import webApplicationData from '../data/dashboard-data.json'

//verses - getting random verse
const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * webApplicationData.verses.length);
    return webApplicationData.verses[randomIndex];
};

const randomVerse = getRandomVerse();

export default randomVerse