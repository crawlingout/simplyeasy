function sendSubscriber(email) {
    $.ajax({
        type: 'POST',
        data: {"email": email},
        url: 'https://www.simplyeasy.cz/subscribe.php',
        //url: 'http://localhost/simplyeasy-simple/subscribe.php',
        success: function(data) {
            $('#subscribe_send').hide();
            $('#subscribe_sent').show();
        },
        error: function(data) {
            console.log('error>', data);
        }
    });
}

function validEmail(address) {
    var x=address.toString();
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }
    else {
        return true;
    }
}

$(document).ready(function() {
    $('#subscribe_send').click(function() {
        var email = $('#subscribe').val();
        var valid = 1;

        if (email === '') {
            valid = 0;
            alert('Vyplňte prosím váš e-mail!');
        }
        else {
            if (!validEmail(email)) {
                valid = 0;
                alert('Vyplňte prosím správně váš e-mail!');
            }
        }

        if (valid) {
            sendSubscriber(email);
        }
    });
});