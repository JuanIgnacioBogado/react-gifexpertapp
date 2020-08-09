
export const getGifs = async (category) => {
  const key = 'qMUU5g4MSg4kxEjTvdK3qM6zNYC3clH5';
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${key}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs;
}