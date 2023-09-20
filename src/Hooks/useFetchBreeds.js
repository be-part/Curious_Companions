import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetchBreeds = (baseUrl) => {
  const createAnimalAPI = useCallback(() => {
    return axios.create({
      baseURL: baseUrl,
    });
  }, [baseUrl]); 

      const [breeds, setBreeds] = useState([]);
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        const animalAPI = createAnimalAPI();
        
        animalAPI
        .get(`/breeds`)
        .then((res) => res.data)
        .then((breeds) => {
          const imagePromises = breeds.map((animal) => {
            const imageUrl = animal.reference_image_id;
            if (imageUrl) {
              return animalAPI
                .get(`/images/${animal.reference_image_id}`)
                .then((res) => {
                  return {
                    info: animal,
                    image: res.data.url,
                    imageHeight: res.data.height,
                    imageWidth: res.data.width,
                  };
                })
                .catch(() => {
                  return { info: animal, image: "URL_NOT_AVAILABLE" };
                });
            } else {
              return { info: animal, image: "URL_NOT_AVAILABLE" };
            }
          });
          Promise.all(imagePromises)
          .then((breeds) => {
            setBreeds(breeds);
            setIsLoading(false);
          })
          
        })
        .catch((err) => {
          return err;
        });
      }, [createAnimalAPI]);
    
      return { breeds, isLoading };
    };

export default useFetchBreeds;