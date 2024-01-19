const btnEdit = document.getElementById("btnEdit");

let namaBio = document.getElementById("namaBio");
let roleBio = document.getElementById("roleBio");
let availabilityBio = document.getElementById("availabilityBio");
let usiaBio = document.getElementById("usiaBio");
let lokasiBio = document.getElementById("lokasiBio");
let pengalamanBio = document.getElementById("pengalamanBio");
let emailBio = document.getElementById("emailBio");

const containerEditForm = document.getElementById("containerEditForm");
const editForm = document.getElementById("editForm");

const namaInput = document.getElementById("namaInput");
const roleInput = document.getElementById("roleInput");
const availabilityInput = document.getElementById("availabilityInput");
const usiaInput = document.getElementById("usiaInput");
const lokasiInput = document.getElementById("lokasiInput");
const pengalamanInput = document.getElementById("pengalamanInput");
const emailInput = document.getElementById("emailInput");

const alertSuccessPlaceholder = document.getElementById('alertSuccessPlaceholder')

const showAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertSuccessPlaceholder.append(wrapper)
}

btnEdit.addEventListener("click", function(){
    containerEditForm.hidden = false;
})

editForm.addEventListener("submit", function(event){
    event.preventDefault();

    namaBio.innerHTML = namaInput.value === "" ? namaBio.innerHTML : namaInput.value;
    roleBio.innerHTML = roleInput.value === "" ? roleBio.innerHTML : roleInput.value;
    availabilityBio.innerHTML = availabilityInput.value === "" ? availabilityBio.innerHTML : availabilityInput.value;
    usiaBio.innerHTML = usiaInput.value === "" ? usiaBio.innerHTML : usiaInput.value;
    lokasiBio.innerHTML = lokasiInput.value === "" ? lokasiBio.innerHTML : lokasiInput.value;
    pengalamanBio.innerHTML = pengalamanInput.value === "" ? pengalamanBio.innerHTML : pengalamanInput.value;
    emailBio.innerHTML = emailInput.value === "" ? emailBio.innerHTML : emailInput.value;

    this.reset();
    containerEditForm.hidden = true;

    showAlert("Profile Succesfuly Changed", "success");


})