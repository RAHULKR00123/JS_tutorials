fetch("https://script.google.com/macros/s/AKfycbwsHwSXo58KjAwSanAFni9aQJ_nG3lT5WyawUjM1FyZhoQMmCv1n25ZeiNYw_UxEroVTA/exec")
  .then(res => res.json())  
// What is res?
// res = response from server
// It contains headers + body (raw)

// What does res.json() do?
// Converts JSON text into a JavaScript object

  .then(data => {
    document.getElementById("a1").textContent = data.A1;
    document.getElementById("a2").textContent = data.A2;
    document.getElementById("b1").textContent = data.B1;
    document.getElementById("b2").textContent = data.B2;
  })
  .catch(er => console.error(er));

