const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

const ipaddress = '45.72.254.245';

fetchCoordsByIP(ipaddress, (error, coords) => {
  if (error) {
    console.log("It didn't work", error);
  } else {
    console.log('Here are your coordinates', coords);
  }
});

const coordinates = { latitude: '43.73340', longitude: '-79.51160' };

fetchISSFlyOverTimes(coordinates, (error, passes) => {
  if (error) {
    console.log("It didn't work", error);
  } else {
    console.log('Here are the overhead pass times', passes);
  }
});