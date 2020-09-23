const codes = require('json/codes.json')

export const sendCode = (code) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const check = codes.access_code.filter(e => e.code === code && e.code)[0];
      if(check){
        resolve(check)
      }else{
        reject('There is no such code')
      }
    }, 1000)
  })
}