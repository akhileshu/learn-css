const fieldsNode = document.querySelectorAll("input");
const labelNode = document.querySelectorAll("label");

Array.from(fieldsNode).forEach((field, index) =>
  field.addEventListener("change", () => {
    let label = Array.from(labelNode)[index];
    if (field.value) {
      label.style.top = "0%";
      label.style.color = "rgb(39, 125, 255)";
      label.style.backgroundColor = "#fff";
    } else {
      // Reset the styles when the field is empty
      label.style.top = "50%"; // This clears the 'top' property
    }
  })
);
