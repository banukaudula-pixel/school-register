// Tab switching
function switchTab(tab) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tab).classList.add('active');
    event.target.classList.add('active');
}

// QR Generator
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrcodeDiv = document.getElementById('qrcode');
let qrcode;

generateBtn.addEventListener('click', () => {
    const regNo = document.getElementById('regNo').value.trim();
    const name = document.getElementById('studentName').value.trim();

    if (!regNo || !name) {
        alert("Please enter both Registration Number and Name");
        return;
    }

    const qrData = `${regNo}, ${name}`;
    qrcodeDiv.innerHTML = "";
    
    qrcode = new QRCode(qrcodeDiv, {
        text: qrData,
        width: 250,
        height: 250,
        colorDark: "#000",
        colorLight: "#ffffff"
    });

    downloadBtn.style.display =

