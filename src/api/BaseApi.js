class BaseApi {

    createFormData = (file, username, tags) => {
        const formData = new FormData();
        formData.append('name', file.name);
        formData.append('username', username);
        formData.append('tags', tags)
        formData.append('file', file);
        return formData;
    };

}

export default BaseApi;