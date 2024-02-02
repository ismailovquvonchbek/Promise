// Promise
// const teng = document.querySelector('.button')
// const promise = new Promise((resolve, reject) => {
//  let status = false

//  if(status) {
//    resolve('Yaxshi')
//  }else{
//   reject('Yomon')
//  }

// })

// promise.then((data) => teng.textContent = data)
// .catch((err) => teng.textContent = err)

// Fetch

// const request = new  XMLHttpRequest();

// console.log(request);

// // GET POST PUT DELETE
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts')

// // request.onload = () => {
// //   console.log(JSON.parse(request.response));
// // }

// request.onload = () => {
//   console.log(request.response);
// }

// request.responseType = 'json'


// request.onerror = () => {
//   console.log('Bizdan xato');
// }

// request.onabort = () => {
//   console.log('Serverdan');
// }


// request.send()

const elButton = document.querySelector('.button')
const recording = new webkitSpeechRecognition();

recording.onresult = (result) => {
  const value = result.results[0][0].transcript;

  console.log(value);


}

recording.onend = () => {
  console.log('Aloqa tugadi');
}

recording.lang = "uz-UZ"


elButton.addEventListener('click', () => {
  recording.start()
})