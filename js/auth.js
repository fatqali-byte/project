// نظام تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // التحقق من بيانات الدخول
    if (username === 'ali' && password === '12345') {
        window.alert("اهلا بك في موقعنا");
        window.location.href = 'index.html';
    } else {
        errorMessage.style.display = 'block';
    }
});
