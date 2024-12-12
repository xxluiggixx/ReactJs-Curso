export const getGifs = async ( category ) => {
    const API_KEY= "";

    const URL=`https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&q=${ category }&limit=5`
    
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const gifs = data.map( ({id,title,images}) => ({
                              id,
                              title,
                              url: images.downsized_medium.url 
                          }))
    return gifs;
  }