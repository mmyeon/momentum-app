(function () {
  const title = document.querySelector(".title");
  const form = document.querySelector(".user-form");
  const input = document.querySelector(".user-name");
  const userName = localStorage.getItem("name");
  const userContent = document.querySelector(".user-content");
  const todoContainer = document.querySelector(".todo-container");

  checkStorageName();

  function handleSubmit(e) {
    e.preventDefault();
    const userName = input.value;
    saveToStorage(userName);
    title.innerText = `Welcome, ${userName}`;
    form.remove();

    showClock();
    updateTime();
    todoContainer.style.display = "block";
  }

  function saveToStorage(username) {
    localStorage.setItem("name", username);
  }

  function checkStorageName() {
    if (userName) {
      title.innerText = `Welcome, ${userName}`;
      form.remove();

      showClock();
      setInterval(updateTime, 1000);
      todoContainer.style.display = "block";
    }
  }

  function showClock() {
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const clock = document.createElement("div");
    clock.classList.add("clock");
    userContent.prepend(clock);
    const hourStr = `${hour < 10 ? `0${hour}` : hour}`;
    const minuteStr = `${minute < 10 ? `0${minute}` : minute}`;
    clock.innerText = `${hourStr} : ${minuteStr}`;
    title.style.fontSize = "40px";
  }

  function updateTime() {
    const clock = document.querySelector(".clock");
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();

    const hourStr = `${hour < 10 ? `0${hour}` : hour}`;
    const minuteStr = `${minute < 10 ? `0${minute}` : minute}`;
    clock.innerText = `${hourStr} : ${minuteStr}`;
  }

  form.addEventListener("submit", handleSubmit);
})();
