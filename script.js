// بيانات تجريبية (سيتم استبدالها بـ Firebase لاحقاً)
let currentUser = null;
const users = [
    { email: "vv@fbi.gov", pass: "vv11", name: "القائد", role: "مطلقة", code: "001" }
];

function login() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if(email === "vv@fbi.gov" && pass === "vv11") {
        currentUser = users[0];
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('user-display-name').innerText = currentUser.name;
        addLog("تسجيل دخول", currentUser.name, "الصفحة الرئيسية");
        checkPermissions();
    } else {
        alert("خطأ في البيانات!");
    }
}

function checkPermissions() {
    // إخفاء الأزرار بناءً على الصلاحية
    if(currentUser.role === "عادية") {
        document.getElementById('nav-emp').style.display = 'none';
        document.getElementById('nav-logs').style.display = 'none';
    } else if(currentUser.role === "متوسطة") {
        document.getElementById('nav-emp').style.display = 'none';
    }
}

function showPage(pageId) {
    // منطق التنقل بين الصفحات
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById('dashboard').classList.remove('hidden'); // شريط التنقل يبقى
    document.getElementById(pageId).classList.remove('hidden');
}

function toggleLogout() {
    const menu = document.getElementById('logout-menu');
    menu.classList.toggle('hidden');
    menu.onclick = () => location.reload(); // إعادة تحميل الصفحة للخروج
}

function addLog(action, user, place) {
    const logList = document.getElementById('log-list');
    const time = new Date().toLocaleTimeString();
    const item = document.createElement('div');
    item.className = 'log-item';
    item.innerText = `[${time}] قام ${user} بـ ${action} في ${place}`;
    logList.prepend(item);
}

// دالة الشات البسيطة
function sendMsg() {
    const input = document.getElementById('msg-input');
    if(input.value == "") return;
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="msg"><b>${currentUser.name}:</b> ${input.value}</div>`;
    input.value = "";
}
