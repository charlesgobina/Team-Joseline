let nathan = document.querySelectorAll(".nathan")
let res = document.querySelectorAll('.data')


console.log(res)

nathan.forEach((nat) => {
  nat.addEventListener('change', () => {
    let timeValue = nat.value
    let timeSlice = timeValue.slice(0, 2); 
    

    console.log(timeSlice)

    res.forEach((dat) => {
      if (dat.dataset.time === nat.dataset.me) {
        console.log('yes');
        if (Number(timeSlice) >= 0 && Number(timeSlice) < 12) {
          dat.textContent = 'early'
        } else {
          dat.textContent = 'late'
        }
      }
    })


    // document.querySelector('#me').textContent = val
    // document.querySelector('#you').textContent = val


  })
})