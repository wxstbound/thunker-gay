$(document).ready(function() {
    $('#paymentProofForm').submit(function(e) {
        e.preventDefault();
        var paymentMethod = $('#paymentMethod').val();
        var amount = $('#amount').val();
        var recipient = $('#recipient').val();

        if (paymentMethod === '' || amount === '' || recipient === '') {
            $('#proofResult').html('<p class="text-danger">Please fill in all fields.</p>');
        } else {
            var proofText = '';

            if (paymentMethod === 'paypal') {
                proofText = 'Payment Proof for PayPal:';
            } else if (paymentMethod === 'cashapp') {
                proofText = 'Payment Proof for Cash App:';
            } else if (paymentMethod === 'venmo') {
                proofText = 'Payment Proof for Venmo:';
            }

            proofText += '<br>Amount: $' + amount + '<br>Recipient: ' + recipient;

            $('#proofResult').html('<p class="text-success">' + proofText + '</p>');
        }
    });
});
