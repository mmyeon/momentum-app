(function () {
  const PENDING = "Pending";
  const FINISHED = "Finished";

  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#todo-input");
  const pendingListDOM = document.querySelector("#pending-ul");
  const finishedListDOM = document.querySelector("#finished-ul");

  function deletePendingToDo(id) {
    const pendingList = JSON.parse(localStorage.getItem(PENDING));
    const newPendingList = pendingList.filter((toDo) => toDo.id !== id);
    saveToStorage(PENDING, newPendingList);
  }

  function deleteFinishedToDo(id) {
    const finishedList = JSON.parse(localStorage.getItem(FINISHED));
    const newFinishedList = finishedList.filter((toDo) => toDo.id !== id);
    saveToStorage(FINISHED, newFinishedList);
  }

  function finishedToDo(id) {
    const pendingList = JSON.parse(localStorage.getItem(PENDING));
    const newPendingList = pendingList.filter((toDo) => toDo.id !== id);
    saveToStorage(PENDING, newPendingList);
    const toDo = pendingList.find((toDo) => toDo.id === id);
    const finishedList = JSON.parse(localStorage.getItem(FINISHED)) || [];
    finishedList.unshift(toDo);
    saveToStorage(FINISHED, finishedList);
  }

  function revertPendingToDo(id) {
    const finishedList = JSON.parse(localStorage.getItem(FINISHED));
    const newFinishedList = finishedList.filter((toDo) => toDo.id !== id);
    saveToStorage(FINISHED, newFinishedList);
    const pendingList = JSON.parse(localStorage.getItem(PENDING));
    const toDo = finishedList.find((toDo) => toDo.id === id);
    pendingList.push(toDo);

    saveToStorage(PENDING, pendingList);
  }

  function displayTaskToList(storageName) {
    const storageKey = storageName === PENDING ? PENDING : FINISHED;
    const todoList = JSON.parse(localStorage.getItem(storageKey)) || [];
    const todoListDOM =
      storageName === PENDING ? pendingListDOM : finishedListDOM;
    todoListDOM.innerHTML = "";

    todoList.forEach((v) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const delBtn = document.createElement("button");
      const additionalBtn = document.createElement("button");
      span.innerText = v.text;
      delBtn.innerText = "❌";
      additionalBtn.innerText = storageName === PENDING ? "✅" : "⏪";
      todoListDOM.appendChild(li);
      li.appendChild(span);
      li.appendChild(delBtn);
      li.appendChild(additionalBtn);
      li.id = v.id;
      delBtn.addEventListener("click", () => {
        storageName === PENDING
          ? deletePendingToDo(v.id)
          : deleteFinishedToDo(v.id);
      });

      additionalBtn.addEventListener("click", () => {
        storageName === PENDING ? finishedToDo(v.id) : revertPendingToDo(v.id);
      });
    });
  }

  function saveToStorage(storageName, toDos) {
    localStorage.setItem(storageName, JSON.stringify(toDos));
    storageName === PENDING
      ? displayTaskToList(PENDING)
      : displayTaskToList(FINISHED);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const pendingList = JSON.parse(localStorage.getItem(PENDING)) || [];
    const finishedList = JSON.parse(localStorage.getItem(FINISHED));
    const text = input.value;
    const toDo = {
      id: Date.now(),
      text,
    };
    input.value = "";
    pendingList.push(toDo);
    saveToStorage(PENDING, pendingList);

    if (finishedList === null) {
      saveToStorage(FINISHED, []);
    }
  }

  function init() {
    form.addEventListener("submit", handleSubmit);
    displayTaskToList(PENDING);
    displayTaskToList(FINISHED);
  }

  init();
})();
