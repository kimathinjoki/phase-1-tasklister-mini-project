document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    toDoInput(e.target.newTaskDescription.value)




  })

  // priority()


});

// const priority= function(){
//   let low = document.getElementById('low')
//   let medium = document.getElementById('medium')
//   let high = document.getElementById('high')
//   low.addEventListener('click',()=>{
//     // li.setAttribute('id','green')
//     li.id ='green'
//   })
//   medium.addEventListener('click',()=>{
//     // li.setAttribute('id','yellow')
//     li.id ='yellow'

//   })
//   high.addEventListener('click',()=>{
//     // li.setAttribute('id','red')
//     li.id = 'red'
//   })

// }


function toDoInput(job) {
  let li = document.createElement('li')
  let del = document.createElement('button')
  del.textContent = 'done'
  del.setAttribute('class', 'delete')
  del.classList.add('delete')
  li.textContent = `${job}`
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
  li.appendChild(del)
  del.addEventListener('click', () => del.parentNode.remove())







  // let low = document.getElementById('low')
  // let medium = document.getElementById('medium')
  // let high = document.getElementById('high')
  // low.addEventListener('click',()=>{
  //   // li.setAttribute('id','green')
  //   li.id ='green'
  // })
  // medium.addEventListener('click',()=>{
  //   // li.setAttribute('id','yellow')
  //   li.id ='yellow'

  // })
  // high.addEventListener('click',()=>{
  //   // li.setAttribute('id','red')
  //   li.id = 'red'
  // })



  // priority.addEventListener('click',(event)=>{
  //   if(event.target.high){
  //     li.setAttribute('class','red')
  //     li.classList.add('green')
  //   }else if(event.target.medium){
  //     li.setAttribute('class','yellow')
  //     li.classList.add('yellow')
  //   }else if(event.target.low){
  //     li.setAttribute('class','red')
  //     li.classList.add('red')
  //   }
  // })

}