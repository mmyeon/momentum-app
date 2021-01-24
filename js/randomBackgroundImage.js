(function () {
  const imagesUrl = [
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1549291981-56d443d5e2a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1586326448571-8c6e1e473bad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1512546321483-c0468b7b8a95?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhZ2xlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80",
  ];

  getImage();

  function getImage() {
    const body = document.body;
    const randomIndex = Math.floor(Math.random() * 6);
    console.log(randomIndex);

    body.style.backgroundImage = `url(${imagesUrl[randomIndex]})`;
  }
})();
