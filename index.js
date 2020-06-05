const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
const ipaddress = '45.72.254.245';

const callback = (error, coordinates) => {
  if (error) {
    console.log("It'd not working", error);
  } else {
    console.log('Here are your coordinates', coordinates);
  }
};

const 
fetchCoordsByIP(ipaddress, callback);

