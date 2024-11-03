const button = document.querySelector("#btn");
  const cards = document.querySelector(".cards");
  const loader = document.querySelector(".loader");

  function createCard(data) {
    return `
      <div class="card">
        <p>Ism: ${data.ism}</p>
        <p>Familya: ${data.familya}</p>
        <p>Yosh: ${data.yosh}</p>
        <p>Telefon: ${data.tel}</p>
        <p>Email: ${data.email}</p>
        <img src="${data.rasm}" alt="Rasm mavjud emas" >
      </div>`;
  }

  button &&
    button.addEventListener("click", function () {
      const data = {
        ism: document.querySelector("#ism").value,
        familya: document.querySelector("#familya").value,
        yosh: document.querySelector("#yosh").value,
        tel: document.querySelector("#tel").value,
        email: document.querySelector("#email").value,
        rasm: document.querySelector("#rasm").value,
      };

      const block = createCard(data);
      cards.innerHTML += block;
    });