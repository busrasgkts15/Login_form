$("#account").ready(function () {

    $("#newpageopen").click(function () {
        $("#card").toggle()
    })

    $("#alert2").css({
        "color": "white",
        "margin": "0",
        "font-size": "medium"
    })

    $("#sıgnup-btn").css({
        "text-align": "center",
        "border": "none",
        "background": "transparent",
        "cursor": "pointer",
        "position": "relative",
        "display": "inline-block",
        "padding": "10px 20px",
        "margin": "20px 10px",
        "font-size": "15px",
        "color": "#FDD835",
        "text-decoration": "none",
        "text-transform": "uppercase",
        "transition": "0.5s",
        "letter-spacing": "4px",
        "overflow": "hidden"

    })

    $("#sıgnup-btn").hover(
        function () {
            // Mouse öğenin üzerine geldiğinde yapılacak işlemler
            $(this).css({
                "border": "none",
                "background": "#FDD835",
                "color": "#050801",
                "box-shadow": "0 0 5px #FDD835, 0 0 25px #FDD835, 0 0 50px #FDD835, 0 0 200px #FDD835"
            })
        },
        function () {
            // Mouse öğenin üzerinden ayrıldığında yapılacak işlemler
            $(this).css({
                "border": "none",
                "background-color": "transparent",
                "color": "#FDD835",
                "box-shadow": "none"
            });
            
        }

    )

    $.validator.addMethod("strongPassword", function(value, element) {
        return this.optional(element) || /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?\":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?\":{}|<>]{8,}$/.test(value);
    }, "Şifre en az bir büyük harf ve en az bir özel karakter içermelidir.");


    $("#accountForm").validate({

        rules: {
            "firstname": {
                required: true,
                minlength: 5,
                maxlength: 15
            },
            "lastname": {
                required: true,
                minlength: 5,
                maxlength: 10
            },
            "mail": {
                required: true,
                email: true
            },
            "password": {
                required: true,
                minlength: 8,
                strongPassword: true // Özel pattern kuralları

            },
            "againpassword": {
                required: true,
                equalTo: "#password" // password ile eşleşmeli.
            }
        },
        messages: {
            "firstname": {
                required: "Kullanıcı adı zorunludur.",
                minlength: "Kullanıcı adı en az 5 karakter olmalıdır.",
                maxlength: "Kullanıcı adı en fazla 15 karakter olmalıdır."
            },
            "lastname": {
                required: "Soy isim girmek zorunludur.",
                minlength: "Lastname en az 5 karakter olmalıdır.",
                maxlength: "Lastname en fazla 10 karakter olmalıdır."
            },
            "mail": {
                required: "E-posta adresi zorunludur.",
                email: "Geçerli bir e-posta adresi girin."
            },
            "password": {
                required: "Şifre zorunludur.",
                minlength: "Şifre en az 6 karakter olmalıdır.",
                strongPassword: "Şifre en az bir büyük harf ve en az bir özel karakter içermelidir."
            },
            "againpassword": {
                required: "Şifre tekrarı zorunludur.",
                equalTo: "Şifreler eşleşmiyor. Lütfen doğru şekilde girin."
            }
        }

    })

})