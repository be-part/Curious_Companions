import axios from "axios";

const catsAPI = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/'
})
export function getCatBreeds() {
    return catsAPI.get(`/breeds`)
        .then((res) => res.data)
        .then((breeds) => {
            const imagePromises = breeds.map((cat) => {
                const imageUrl = cat.reference_image_id;
                if (imageUrl) {
                    return catsAPI.get(`/images/${cat.reference_image_id}`)
                        .then((res) => {
                            return { info: cat, image: res.data.url, imageHeight: res.data.height, imageWidth: res.data.width };
                        })
                        .catch((error) => {
                            console.error('Error fetching image:', error);
                           
                            return { info: cat, image: "URL_NOT_AVAILABLE" };
                        });
                } else {
                    
                    return { info: cat, image: "URL_NOT_AVAILABLE" };
                }
            });

            return Promise.all(imagePromises);
        })
        .catch((err) => {
            console.error('Error fetching breeds:', err);
           
            throw err;
        });
}

export function getCatImages() {
    return catsAPI.get(`/images/search?limit=10`)
        .then((res) => res.data)
        .then((imageData) => {
            return imageData.map((data) => {
                return data.url;
            });
        })
        .catch((err) => { return err });
}

export function getSingleCat({breed_id}) {
    return catsAPI.get(`/breeds/${breed_id}`)
        .then((res) => res.data)
        .then((data) => {
                const imageUrl = data.reference_image_id;
                if (imageUrl) {
                   
                    return catsAPI.get(`/images/${imageUrl}`)
                        .then((res) => {
                            return { info: data, image: res.data.url };
                        })
                        .catch((error) => {
                            console.error('Error fetching image:', error);
                           
                            return { info: data, image: "URL_NOT_AVAILABLE" };
                        });
                } else {
                    
                    return { info: data, image: "URL_NOT_AVAILABLE" };
                }
            })
        .catch((err) => {
            console.error('Error fetching breeds:', err);
           
            throw err;
        });
}


const dogsAPI = axios.create({
    baseURL: 'https://api.thedogapi.com/v1/'
})

export function getDogBreeds() {
    return dogsAPI.get(`/breeds`)
        .then((res) => res.data)
        .then((breeds) => {
           
            const imagePromises = breeds.map((dog) => {
                const imageUrl = dog.reference_image_id;
                if (imageUrl) {
                    return dogsAPI.get(`/images/${dog.reference_image_id}`)
                        .then((res) => {
                            return { info: dog, image: res.data.url, imageHeight: res.data.height, imageWidth: res.data.width };
                        })
                        .catch((error) => {
                            console.error('Error fetching image:', error);
                         
                            return { info: dog, image: "URL_NOT_AVAILABLE" };
                        });
                } else {
                   
                    return { info: dog, image: "URL_NOT_AVAILABLE" };
                }
            });

            return Promise.all(imagePromises);
        })
        .catch((err) => {
            console.error('Error fetching breeds:', err);
            
            throw err;
        });
}


export function getDogImages() {
    return dogsAPI.get(`/images/search?limit=10`)
        .then((res) => res.data)
        .then((imageData) => {
            return imageData.map((data) => {
                return data.url;
            });
        })
        .catch((err) => { return err });;
}

export function getSingleDog({breed_id}) {
    return dogsAPI.get(`/breeds/${breed_id}`)
        .then((res) => res.data)
        .then((data) => {
                const imageUrl = data.reference_image_id;
                if (imageUrl) {
                   
                    return dogsAPI.get(`/images/${imageUrl}`)
                        .then((res) => {
                            return { info: data, image: res.data.url };
                        })
                        .catch((error) => {
                            console.error('Error fetching image:', error);
                           
                            return { info: data, image: "URL_NOT_AVAILABLE" };
                        });
                } else {
                    
                    return { info: data, image: "URL_NOT_AVAILABLE" };
                }
            })
        .catch((err) => {
            console.error('Error fetching breeds:', err);
           
            throw err;
        });
}