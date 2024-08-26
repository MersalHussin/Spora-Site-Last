let burgerMenu = document.querySelector(".burger-menu");
let mobileMenu = document.querySelector(".on-mobile");

function toggleMenu(){
    burgerMenu.classList.toggle("opened")
    mobileMenu.classList.toggle("opened")
}

function faq(){

    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });   
}

faq()


function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`تم إرسال الرسالة بنجاح!\n\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالرسالة: ${message}`);
        // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم باستخدام AJAX أو أي تقنية أخرى
    } else {
        alert('يرجى ملء جميع الحقول قبل إرسال الرسالة.');
    }
}


// Year
document.getElementById('year').textContent = new Date().getFullYear();

