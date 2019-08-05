export const responseUnwrapperInterceptor = response => response.data.data;

export const mapInterceptor = data => (
    Array.isArray(data) 
        ? data.map((item) => {
            return mapGifObject(item);
        })
        : mapGifObject(data)
);

const mapGifObject = (gifData) => ({
    id: gifData.id,
    title: gifData.title,
    username: gifData.username,
    avatarUrl: gifData.username ? gifData.user.avatar_url : '',
    postDate: gifData.import_datetime,
    previewImgUrl: gifData.images.fixed_height_small.mp4,
    originalImgUrl: gifData.images.original.mp4,
});
