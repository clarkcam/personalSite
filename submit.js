const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')
const path = `${window.location.origin}/block09/personalSite`

form.addEventListener('submit', (e) => {
  console.log("test")
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = path + '/success.html'
})
