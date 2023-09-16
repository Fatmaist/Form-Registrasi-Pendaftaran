let pendaftar = []

function ViewDeleteData() {
    Registration = document.getElementById('pendaftarTable')
    Registration.innerHTML = ''

    pendaftar.forEach((data, index) => {
        const row = Registration.insertRow();
        row.innerHTML = `
            <td>${data.nama}</td>
            <td>${data.umur}</td>
            <td>${data.uangSangu}</td>
            <button class="delete-btn rounded text-danger">
            DELETE
            </button>
        `
        var currentTodo = document.querySelectorAll('.delete-btn');
        for (let i = 0; i <currentTodo.length; i++) {
            currentTodo[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    })
}

function hitungRataRata() {
    let totalUmur = 0
    let totalUangSangu = 0

    pendaftar.forEach((data) => {
        totalUmur += data.umur
        totalUangSangu += data.uangSangu
    })

    rataRataUmur = totalUmur / pendaftar.length
    rataRataUangSangu = totalUangSangu / pendaftar.length
    return { rataRataUmur, rataRataUangSangu }
}

function tampilkanResume(index) {
    resume = document.getElementById('resume')
    const { rataRataUmur, rataRataUangSangu } = hitungRataRata()

    resume.innerHTML = `<b>RESUME</b> <br>Rata-rata pendaftar memiliki uang sangu sebesar ${rataRataUangSangu.toFixed(2)} dengan rata-rata umur ${rataRataUmur.toFixed(2)}`
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
        alert('Data tidak memenuhi kriteria. Periksa kembali isian Anda!')
        document.getElementById('nama').value = ''
        document.getElementById('umur').value = ''
        document.getElementById('uang-sangu').value = ''
        return
    }

    pendaftar.push({ nama, umur, uangSangu })

    ViewDeleteData()
    tampilkanResume()
})

document.getElementById('list-pendaftar-tab').onclick()