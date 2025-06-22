const { execSync } = require('child_process');

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error(err.message);
  }
}

function disableWebcam() {
  run("powershell -Command \"Get-PnpDevice -Class 'Image' | Disable-PnpDevice -Confirm:$false\"");
}

function enableWebcam() {
  run("powershell -Command \"Get-PnpDevice -Class 'Image' | Enable-PnpDevice -Confirm:$false\"");
}

function disableMicrophone() {
  run("powershell -Command \"Get-PnpDevice -Class 'AudioEndpoint' | Where-Object { $_.FriendlyName -like '*microphone*' } | Disable-PnpDevice -Confirm:$false\"");
}

function enableMicrophone() {
  run("powershell -Command \"Get-PnpDevice -Class 'AudioEndpoint' | Where-Object { $_.FriendlyName -like '*microphone*' } | Enable-PnpDevice -Confirm:$false\"");
}

function disableAll() {
  disableWebcam();
  disableMicrophone();
}

function enableAll() {
  enableWebcam();
  enableMicrophone();
}

if (require.main === module) {
  const action = process.argv[2];

  switch(action) {
    case 'disable':
      disableAll();
      break;
    case 'enable':
      enableAll();
      break;
    default:
      console.log('Usage: node index.js <enable|disable>');
  }
}

module.exports = { disableAll, enableAll };
