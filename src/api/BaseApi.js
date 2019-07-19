class BaseApi {

    getGifArray = async (keyword, limit, offset) => {
        const queryUrl = this.createUrlForKeyword(keyword, limit, offset);
        const apiResponse = await fetch(queryUrl);
        const gifsObject = await apiResponse.json();
        return this.mapGifArray(gifsObject);
    };

    getSingleGif = async (id) => {
        const queryUrl = this.createUrlForId(id);
        const apiResponse = await fetch(queryUrl);
        const gifObject = await apiResponse.json();
        return this.mapSingleGif(gifObject);
    };

    uploadGif = async (file) => {
        try {
            const request = await fetch('https://api', this.createUploadRequestBody(file));
            const response = await request.json();
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };
}

export default BaseApi;
