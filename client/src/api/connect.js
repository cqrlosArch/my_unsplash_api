import axios from 'axios';

const getImagesDB = async () => {
  const res = await axios.get('http://localhost:8080/api/images');
  return res.data;
};
const removeImageDB = async (id) => {
  await axios.delete(`http://localhost:8080/api/images/${id}`);
};

const addImageDB = async (image) => {
  const options = {
    method: 'POST',
    data: image,
    url: `http://localhost:8080/api/images/`,
  };
  await axios(options);
};

export { getImagesDB, removeImageDB, addImageDB };
