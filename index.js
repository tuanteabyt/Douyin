const axios = require('axios');
const prompt = require("prompt-sync")({ sigint: true });

const downloadVideo=require('./downloadvideo');
async function downloadDouyinVideo(url) {
  const encodedParams = new URLSearchParams();
  encodedParams.set('URL', url);

  const options = {
    method: 'POST',
    url: 'https://api-douyin-downloader-without-watermark-download-douyin-videos.p.rapidapi.com/',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'b203a27511msh314957a108371fcp1e9982jsn29b4251d4867',
      'X-RapidAPI-Host': 'api-douyin-downloader-without-watermark-download-douyin-videos.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    downloadVideo(response.data.title+".mp4",response.data.links[1].url);
  } catch (error) {
    console.error(error);
  }
}
const url = prompt("Url: ");
// Call the async function to initiate the download
downloadDouyinVideo(url);





