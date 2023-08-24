let pDOM = document.getElementById('alert')
let pDOM2 = document.getElementById('alert2')

function newAccount() {
    document.getElementById('account').classList.add("newpage")
    document.getElementById('card').style.display = 'none'
}


function validateForm() {
    let userName = document.forms["loginForm"]["username"].value
    let password = document.forms["loginForm"]["password"].value
    if (userName == "" || password == "") {
        alertDOM("There are empty fields")

    } else if (userName.length < 2 || userName.length > 15) {
        alertDOM("Be careful with your username")
    }
    else if (password.length < 8) {
        alertDOM("You entered wrong password")
    } else {
        pDOM.innerHTML = `<p style="margin: 0" class="alert alert-danger alert-dismissible fade show" role="alert">
        <svg style="margin-bottom: -5px" xmlns="http://www.w3.org/2000/svg" height="1.75em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#34933f}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
           ${"Login successful"}
         </p>
         `
    }
}

function accountValidateForm() {
    //********Name control **********/
    let accountName = document.forms["accountForm"]["accountname"].value
    let lastName = document.forms["accountForm"]["lastname"].value
    let mailcontrol = document.forms["accountForm"]["mail"].value
    let accountPassword = document.forms["accountForm"]["accountPassword"].value
    let accountAgainPS = document.forms["accountForm"]["accountPasswordAgain"].value
    if (accountName == "" || lastName == "" || mailcontrol == "" || accountPassword == "" || accountAgainPS == "") {
        alertDOM2("There are empty fields")

    } else if (accountName.length < 2 || accountName.length > 15 ||
        lastName.length < 2 || lastName.length > 15) {
        alertDOM2("You entered the wrong username or lastname")
    }

    //**********Mail control *********/

    else if (mailcontrol.includes("@") == false || mailcontrol.indexOf("@") < 1) {
        alertDOM2("İnvalid email address")
    }

    //*********Password control ********/
    else if (accountPassword != "") {
        var symbol = '*|,:<>[]{}`()@&$#%!+-"/'
        var symbolControl
        for (var i = 0; i < symbol.length; i++) {
            if (accountPassword.includes(symbol.charAt(i)) == true) {
                symbolControl = true
                break
            } else {
                symbolControl = false
            }
        }

        if (accountPassword != accountAgainPS) {
            alertDOM2("Passwords must be the same")
        }

        else if (accountPassword.length < 8) {
            alertDOM2("Set a stronger password")

        }
        else if (symbolControl == false) {
            alertDOM2("The password must contain at least one special character.")
        } else if (accountPassword.search(/[A-Z]/) < 0) {
            alertDOM2("Password must contain at least one Capital letter.")
        } else if (accountPassword.search(/[a-z]/) < 0) {
            alertDOM2("The password must contain at least one lowercase letter.")
        } else if (accountPassword.search(/[0-9]/) < 0) {
            alertDOM2("The password must contain at least one digit.")
        }

        else {
            pDOM2.innerHTML = `<p style="margin: 0" class="alert alert-danger alert-dismissible fade show" role="alert">
            <svg style="margin-bottom: -5px" xmlns="http://www.w3.org/2000/svg" height="1.75em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#34933f}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
              ${"Your registration has been successful"}
            </p>
            `
        }
    }
}

function alertDOM(message) {
    pDOM.innerHTML = `<p style="margin: 0" class="alert alert-danger alert-dismissible fade show" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
    </svg>
      ${message}
    </p>
    `
    setTimeout(() => {
        pDOM.innerHTML = "";
    }, 2000);
}

function alertDOM2(message) {
    pDOM2.innerHTML = `<p style="margin: 0" class="alert alert-danger alert-dismissible fade show" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
    </svg>
      ${message}
    </p>`

    setTimeout(() => {
        pDOM2.innerHTML = "";
    }, 2000);
}