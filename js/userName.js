(function () {
  const title = document.querySelector(".js-title");
  const form = document.querySelector(".user-form");
  const input = document.querySelector(".user-name");

  const storageName = localStorage.getItem("name");

  checkStorageName();

  function handleSubmit(e) {
    e.preventDefault();
    const userName = input.value;
    saveToStorage(userName);
    title.innerText = `Welcome, ${userName}`;
    input.remove();
  }

  function saveToStorage(username) {
    localStorage.setItem("name", username);
  }

  function checkStorageName() {
    if (storageName) {
      title.innerText = `Welcome, ${storageName}`;
      input.remove();
    }
  }

  form.addEventListener("submit", handleSubmit);
})();
