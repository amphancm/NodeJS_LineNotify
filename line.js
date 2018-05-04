
const request = require('request');

const token   = 'YOUR TOKEN'; // Token


const lineMessage = '\nThis is Line Notify Test !!!';

notifyLine(lineMessage,2,34);

function notifyLine(lineMessage, stkPkgId, stkId) {
  request({
     method: 'POST',
     uri: 'https://notify-api.line.me/api/notify',
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
  },
     'auth': {
       'bearer': token
  },form: {
       message: lineMessage,
       stickerPackageId: stkPkgId,
       stickerId: stkId
    }
  }, (err,httpResponse,body) => {
     console.log(JSON.stringify(err));
     console.log(JSON.stringify(httpResponse));
     console.log(JSON.stringify(body));
  });
}

