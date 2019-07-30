export const mapGif = (gifData) => {
    return mapGifObject(gifData.data);
};

export const mapGifs = (gifData) => {
    const dataArray = gifData.data.map((item) => {
        return mapGifObject(item);
    });
    return dataArray;
};

const mapGifObject = (gifData) => ({
    id: gifData.id,
    title: gifData.title,
    username: gifData.username,
    avatarUrl: gifData.username ? gifData.user.avatar_url : '',
    postDate: gifData.import_datetime,
    previewImgUrl: gifData.images.fixed_height_small.mp4,
    originalImgUrl: gifData.images.original.mp4,
});
