import React, { useCallback, useEffect, useState } from 'react';
import { getImagesDB, removeImageDB, addImageDB } from '../api/connect';

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [filterPhotos, setFilterPhotos] = useState();
  const [isModalAdd, setIsModalAdd] = useState(false);

  const addNewPhoto = async (e, data) => {
    e.preventDefault();
    console.log(data);
    await addImageDB(data);
    await getDataDB();
    setIsModalAdd(false);
  };

  const deletePhoto = async (id) => {
    await removeImageDB(id);
    await getDataDB();
  };

  const openModalAdd = () => {
    setIsModalAdd(true);
  };
  const closeModalAdd = () => {
    setIsModalAdd(false);
  };

  const filter = useCallback(
    (value) => {
      setFilterPhotos(
        photos.filter(
          (p) =>
            p.label.toLowerCase().includes(value.toLowerCase()) || value === ''
        )
      );
    },
    [photos]
  );

  const getDataDB = useCallback(async () => {
    const res = await getImagesDB();
    console.log(res.images);

    setPhotos(res.images);

    setFilterPhotos(res.images);
  }, []);

  useEffect(() => {
    getDataDB();
  }, [getDataDB]);

  const value = {
    photos,
    isModalAdd,
    openModalAdd,
    closeModalAdd,
    addNewPhoto,
    deletePhoto,
    filter,
    filterPhotos,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContextConsumer = AppContext.Consumer;
