const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);

function maleToFemale(input, output, cb) {
  ffmpeg(input)
    .audioFilter('asetrate=44100*1.25,atempo=0.8,aresample=44100')
    .on('end', () => cb && cb(null))
    .on('error', err => cb && cb(err))
    .save(output);
}

if (require.main === module) {
  const [input, output] = process.argv.slice(2);

  if (!input || !output) {
    console.log('사용법: node voiceChanger.js 입력.wav 출력.wav');
    process.exit(1);
  }

  maleToFemale(input, output, (err) => {
    if (err) {
      console.error('변환 실패:', err.message);
    } else {
      console.log('변환 완료:', output);
    }
  });
}

module.exports = maleToFemale;
