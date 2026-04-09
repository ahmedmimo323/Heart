// دوال الوصول (Accessibility)
function toggleDark() { document.body.classList.toggle("dark"); }
function toggleContrast() { document.body.classList.toggle("high-contrast"); }
function increaseText() { document.body.classList.toggle("large-text"); }

function speak() {
    window.speechSynthesis.cancel();
    const text = document.querySelector('main').innerText;
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ar-SA';
    window.speechSynthesis.speak(msg);
}

// دوال تسجيل الدخول
function openLogin() { document.getElementById("loginModal").style.display = "block"; }
function closeLogin() { document.getElementById("loginModal").style.display = "none"; }

window.onclick = function(event) {
    if (event.target == document.getElementById("loginModal")) { closeLogin(); }
}

// معالجة النماذج
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    alert("مرحباً بك! تم تسجيل الدخول بنجاح.");
    closeLogin();
}

document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    alert("شكراً لتواصلك معنا، سنرد عليك قريباً.");
    this.reset();
}
