function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')
}

function setAvatar() {
  fetch("https://api.github.com/users/lucapinheiro")
    .then((response) => response.json())
    .then((json) => {
      const avatar = document.getElementById("avatar")
      avatar.src = json.avatar_url
    })
}

setAvatar()

