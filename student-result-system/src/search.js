const search_result_form = document.getElementById("search_result_form");

search_result_form.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  console.log(data);

  let oldData = getDataLS("students");

  const studentResult = oldData.find(
    (item) => item.roll === data.roll && item.reg === data.reg
  );

  console.log(studentResult);
};
