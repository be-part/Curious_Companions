import axios from "axios";

const catsAPI = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/'
})
export function getCatBreeds() {
    return catsAPI.get(`/breeds`)
        .then((res) => res.data)
        .then((breeds) => {
            // Use Promise.all to wait for all image requests to complete
            const imagePromises = breeds.map((cat) => {
                const imageUrl = cat.reference_image_id;
                if (imageUrl) {
                    return catsAPI.get(`/images/${cat.reference_image_id}`)
                        .then((res) => {
                            return { info: cat, image: res.data.url, imageHeight: res.data.height, imageWidth: res.data.width };
                        })
                        .catch((error) => {
                            console.error('Error fetching image:', error);
                            // Return an object with the breed information and a custom string for the image URL
                            return { info: cat, image: "URL_NOT_AVAILABLE" };
                        });
                } else {
                    // Return an object with the breed information and a custom string for the image URL
                    return { info: cat, image: "URL_NOT_AVAILABLE" };
                }
            });

            return Promise.all(imagePromises);
        })
        .catch((err) => {
            console.error('Error fetching breeds:', err);
            // Rethrow the error to handle it later if needed
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
            // Use Promise.all to wait for all image requests to complete
            const imagePromises = breeds.map((dog) => {
                const imageUrl = dog.reference_image_id;
                if (imageUrl) {
                    return dogsAPI.get(`/images/${dog.reference_image_id}`)
                        .then((res) => {
                            return { info: dog, image: res.data.url, imageHeight: res.data.height, imageWidth: res.data.width };
                        })
                        .catch((error) => {
                            console.error('Error fetching image:', error);
                            // Return an object with the breed information and a custom string for the image URL
                            return { info: dog, image: "URL_NOT_AVAILABLE" };
                        });
                } else {
                    // Return an object with the breed information and a custom string for the image URL
                    return { info: dog, image: "URL_NOT_AVAILABLE" };
                }
            });

            return Promise.all(imagePromises);
        })
        .catch((err) => {
            console.error('Error fetching breeds:', err);
            // Rethrow the error to handle it later if needed
            throw err;
        });
}


