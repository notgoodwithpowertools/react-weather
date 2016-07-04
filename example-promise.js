function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Melbourne', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function(resolve, reject) {
    console.log("Calculating...");
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

/*
getTempPromise('Melbourne').then(function(temp){
  console.log('Promise Success', temp);
}, function(err) {
  console.log('Promise Error', err);
})
*/

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('a, b need to be numbers');
    }
  });
}

/*
addPromise(5,6).then(function(sum){
  console.log("add success...", sum);
}, function (err) {
  console.log("error", err);
});

addPromise(5,'test').then(function(sum){
  console.log("add success wont work...", sum);
}, function (err) {
  console.log("error", err);
});
*/
