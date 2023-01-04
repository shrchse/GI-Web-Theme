const mondo = 'https://i.postimg.cc/rybxXJ1m/mondo.webp';
const liyue = 'https://i.postimg.cc/76RG4HTc/liyue.webp';
const inazuma = 'https://i.postimg.cc/MKVD94Cx/inazuma.webp';

class DataSource {
    static searchChar(keyword){
        return fetch(`https://api.genshin.dev/characters/search?t=${keyword}`)
            .then(res => {
                return res.json();
            })
            .then(resJson => {
                if(resJson.characters){
                    return Promise.resolve(resJson.characters);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}

export default DataSource
export {mondo, liyue, inazuma};