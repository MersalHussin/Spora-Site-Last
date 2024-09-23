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
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const message = document.getElementById('message').value;



    let params = {
        user_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
    }
    if ( params.user_name && params.email && params.message && params.number) {
        emailjs.send("service_kgli3cs","template_rtbiwwp" , params).then( _ => alert("تم إرسال الرسالة بنجاج"))
        
     // إعادة تعيين الحقول بعد الإرسال
     document.getElementById("name").value = "";
     document.getElementById("email").value = "";
     document.getElementById("number").value = "";
     document.getElementById("message").value = "";

    } else {
        alert('يرجى ملء جميع الحقول قبل إرسال الرسالة.');
    }
}


// Year
document.getElementById('year').textContent = new Date().getFullYear();
