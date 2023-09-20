import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetchImages = (baseUrl) => {
  const createAnimalAPI = useCallback(() => {
    return axios.create({
      baseURL: baseUrl,
    });
  }, [baseUrl]); 

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const animalAPI = createAnimalAPI();

    animalAPI
      .get(`/images/search?limit=10`)
      .then((res) => res.data)
      .then((imageData) => {
        const urls = imageData.map((data) => data.url);
        setImages(urls);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching images:", err);
        setIsLoading(false);
      });
  }, [createAnimalAPI]);

  return { images, isLoading };
};

export default useFetchImages;


