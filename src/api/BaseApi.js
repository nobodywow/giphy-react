
class BaseApi {

    createFormData = (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', file.name);
        return formData;
    };

}

export default BaseApi;