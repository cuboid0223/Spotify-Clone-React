export const authEndpoint = "https://accounts.spotify.com/authorize"; // <<< 當使用者按下登入鍵，及交給 spotify API 處理登入

const redirectUri = "https://spotify-clone-a2b82.web.app/"; // <<< 等使用者登入完，轉址到 我的網頁

//93821ee8489145dca86bb12f97f75e88
const clientId = "93821ee8489145dca86bb12f97f75e88";


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
     // hash => #
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        // #accessToken=mysupersecretkey&name=sonny&a
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {});
} 