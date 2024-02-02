// P.r.o.m.i.s.e

const promise = new Promise((resolve, reject) => {
  let status = false

  if (status) {
    resolve('Yaxshi')
  } else {
    reject('Yomon')
  }
});

promise.then((data) => console.log(data)).catch((err) => console.log(err))


// FETCH

const request = new XMLHttpRequest();

// GET POST PUT DELETE
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');


// JSON
request.onload = () => {
  console.log(request.response)
}

// request.onload = ()=> {
//   console.log(JSON.parse(request.response))
// }

request.responseType = 'json'

// Error bizdan
request.onerror = (err) => {
  console.log(err.type);
}

// Error server
request.onabort = (err) => {
  console.log('xato serverdan');
}

// Online
request.send()


const button = document.querySelector('.button')
const recording = new webkitSpeechRecognition();

recording.lang = 'uz-UZ';

recording.onresult = (result) => {
  const value = result.results[0][0].transcript;

  console.log(value);

  //  if(value.includes('salom')) {
  //   console.log('Awsalom');
  //  }
}

recording.onend = () => {
  console.log('Aloqa tugadi');
}



button.addEventListener('click', () => {
  recording.start()
})



