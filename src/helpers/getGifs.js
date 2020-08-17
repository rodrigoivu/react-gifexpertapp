export const getGifs = async( category ) =>  {

    //encodeURI reemplaza los espacios vacios por %20 etc
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=GAFpyXJr7h8ss9cyY0FnoP49fuyYuiew`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //el ? se pone por si no viene esa info
        }
    })

    return gifs
}
