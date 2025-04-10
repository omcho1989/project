const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").innerHTML = `&copy; ${currentYear}`;

const lastModified = document.lastModified;
document.querySelector("#lastmodified").textContent = lastModified;