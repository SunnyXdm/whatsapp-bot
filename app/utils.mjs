import axios from "axios";

const getStream = async (url) =>
  axios.post(
    "https://co.wuk.sh/api/json",
    {
      url,
      aFormat: "mp3",
      filenamePattern: "classic",
      dubLang: false,
      vQuality: "1080",
    },
    {
      headers: {
        accept: "application/json",
        "accept-language": "en-GB,en;q=0.5",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-gpc": "1",
      },
    }
  );

function isValidUrl(urlString) {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
}

// const { data } = await getStream(
//   "https://www.instagram.com/reel/CzJQDRkoDcf/?igshid=MzRlODBiNWFlZA=="
// );

// console.log(data);

export { isValidUrl, getStream };
// module.exports = {
//   getStream,
//   isValidUrl,
// };
