let pendaftar = []

function ViewDeleteData() {
    Registration = document.getElementById('pendaftarTable')
    Registration.innerHTML = ''

    pendaftar.forEach((data, index) => {
        const row = Registration.insertRow()
        row.innerHTML =+`
        <td>${data.nama}</td>
            <td>${data.umur}</td>
            <td>${data.uangSangu}</td>
            <button class="delete-btn rounded text-danger">
            DELETE
            </button>
            `
            var currentReg = document.querySelectorAll('.delete-btn')
            for (let i = 0; i < currentReg.length; i++) {
                currentReg[i].onclick = function() {
                    this.parentNode.remove()
                }
            }
    })
}

const registrationForm = document.getElementById('registrationForm')
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nama = document.getElementById('nama').value
    const umur = parseInt(document.getElementById('umur').value)
    const uangSangu = parseInt(document.getElementById('uang-sangu').value)

    if (nama.length == 0 || umur.length == 0 || uangSangu.length == 0) {
        alert('Data Registrasi kosong. Silahkan input data anda!')
        return
    } else if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert('Data tidak memenuhi kriteria. Periksa kembali isian Anda.')
        return
    }

    pendaftar.push({ nama, umur, uangSangu })

    ViewDeleteDataData()
    tampilkanResume()
})

document.getElementById('list-pendaftar-tab').onclick()