import { useState, useEffect } from "react";
import axios from "axios";

const useFetchImages = (baseUrl) => {
  const animalAPI = axios.create({
    baseURL: baseUrl,
  });

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, [animalAPI]);

  return { images, isLoading };
};

export default useFetchImages;


