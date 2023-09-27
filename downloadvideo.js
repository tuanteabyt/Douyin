const axios = require('axios');
const fs = require('fs');

async function downloadVideo(outputPath,videoUrl) {
  try {
    const response = await axios.get(videoUrl, { responseType: 'stream' });

    // Create a write stream to save the video to a file
    const writer = fs.createWriteStream(outputPath);

    // Pipe the response data to the writer
    response.data.pipe(writer);
    // Wait for the write stream to finish writing the file
    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    console.log(`Video downloaded and saved as ${outputPath}`);
  } catch (error) {
    console.error('Error downloading the video:', error.message);
  }
}

// Call the function to start the download
//downloadVideo(a,"http://v3-webg.douyinvod.com/c79e66e446c206901e86c0954b0390eb/6501ab93/video/tos/cn/tos-cn-ve-15c001-alinc2/oAgTINT7EzASZNAFzZfBAeyRnAXgbBSaEjt0Th/?a=6383&ch=26&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1333&bt=1333&cs=0&ds=4&ft=Et3S_eaGmDUPD12NhBnuf-UxXNdI-yF_O5&mime_type=video_mp4&qs=0&rc=ZmdlM2Y2NjlpOGk5NmhmaUBpanVnbTQ6ZjVsbTMzNGkzM0BjYGA2LmMwXmAxNDBhMl8yYSM2YmBxcjRfZzZgLS1kLWFzcw%3D%3D&btag=e00030000&dy_q=1694604277&l=20230913192437E743A110B015D819EA50")
module.exports =downloadVideo;
