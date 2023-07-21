import axios from "axios";

const catsAPI = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/'
})
export function getBreeds() {
    return catsAPI.get(`/breeds`)
        .then((res) => res.data)
        .then((breeds) => {
            // Use Promise.all to wait for all image requests to complete
            const imagePromises = breeds.map((cat) => {
                const imageUrl = cat.reference_image_id;
                if (imageUrl) {
                    return catsAPI.get(`/images/${cat.reference_image_id}`)
                        .then((res) => {
                            return { info: cat, image: res.data.url };
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


export function getSingleImage(imageID) {
    return catsAPI.get(`images/${imageID}`).then((res) => {
        return res.data
    }).catch((err) => {return err})
}