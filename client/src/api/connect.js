import axios from 'axios';

const urlDatabase = 'https://api-unsplash-v2.herokuapp.com/api/images';

const getImagesDB = async () => {
  const res = await axios.get(urlDatabase);
  return res.data;
};
const removeImageDB = async (id) => {
  await axios.delete(`${urlDatabase}/${id}`);
};

const addImageDB = async (image) => {
  const options = {
    method: 'POST',
    data: image,
    url: urlDatabase,
  };
  await axios(options);
};

export { getImagesDB, removeImageDB, addImageDB };
