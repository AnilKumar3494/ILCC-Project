import versesData from '../data/verses-data.json'

//verses - getting random verse
const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * versesData.length);
    return versesData[randomIndex];
};

const randomVerse = getRandomVerse();

export default randomVerse