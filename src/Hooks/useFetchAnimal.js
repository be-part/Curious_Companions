import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetchAnimal = (baseUrl, breed_id) => {

  const createAnimalAPI = useCallback(() => {
    return axios.create({
      baseURL: baseUrl,
    });
  }, [baseUrl]); 

    
    const [animal, setAnimal] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
    const animalAPI = createAnimalAPI();

     animalAPI
     .get(`/breeds/${breed_id}`)
     .then((res) => res.data)
     .then((data) => {
       const imageUrl = data.reference_image_id;
       if (imageUrl) {
         return animalAPI
           .get(`/images/${imageUrl}`)
           .then((res) => {
             setAnimal({ info: data, image: res.data.url });
             setIsLoading(false);
           })
           .catch(() => {
             setAnimal({ info: data, image: "URL_NOT_AVAILABLE" });
             setIsLoading(false);
           });
       } else {
        setAnimal({ info: data, image: "URL_NOT_AVAILABLE" });
        setIsLoading(false);
       }
     })
     .catch((err) => {
       return err;
     });
    }, [createAnimalAPI, breed_id]);

    return {animal, isLoading}
}

export default useFetchAnimal;