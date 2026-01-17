function openBillForm() {
  document.getElementById("billModal").style.display = "flex";
}

function closeBillForm() {
  document.getElementById("billModal").style.display = "none";
}

function submitBill() {
  const company = document.getElementById("company").value;
  const invoiceDate = document.getElementById("invoiceDate").value;
  const poDate = document.getElementById("poDate").value;

  if (!company || !invoiceDate) {
    alert("Please fill required fields");
    return;
  }

  // FOR PROTOTYPE: just log
 fetch("https://script.google.com/macros/s/AKfycbw0N_MYNuibOnELtmywzcYm0kKUskPrJccgQdgku7TRB2iLa5mrfIqPSqJgYPenZUI/exec", {
  method: "POST",
  body: JSON.stringify({
    docType: "BILL",
    company,
    invoiceDate,
    poDate
  })
})
.then(res => res.json())
.then(data => {
  alert("Saved to Excel!");
  closeBillForm();
});


  // later → store in database / localStorage
  // then redirect to bill entry page
  // window.location.href = "bill-entry.html";

  // closeBillForm();
}

// function submitBill() {
//   const company = document.getElementById("company").value;
//   const invoiceDate = document.getElementById("invoiceDate").value;
//   const poDate = document.getElementById("poDate").value;

//   if (!company || !invoiceDate) {
//     alert("Please fill required fields");
//     return;
//   }

//   fetch("", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       docType: "BILL",
//       company: company,
//       invoiceDate: invoiceDate,
//       poDate: poDate
//     })
//   })
//   .then(res => res.json())
//   .then(data => {
//     alert("Saved to Excel!");
//     closeBillForm();
//   })
//   .catch(err => {
//     console.error(err);
//     alert("Error saving data");
//   });
// }

//   }

//   // FOR PROTOTYPE: just log
//   console.log({
//     docType: "BILL",
//     company,
//     invoiceDate,
//     poDate
//   });

//   // later → store in database / localStorage
//   // then redirect to bill entry page
//   // window.location.href = "bill-entry.html";

//   closeBillForm();

