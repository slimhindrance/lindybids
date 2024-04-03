document.getElementById('bidForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const user_email = document.getElementById('user_email').value;
    const other_email = document.getElementById('other_email').value;
    const deal_code = document.getElementById('deal_code').value;
    const bid_number = document.getElementById('bid_number').value;
    const notes = document.getElementById('notes').value;

    fetch('YOUR_AZURE_FUNCTION_URL/RegisterBid', {
        method: 'POST',
        body: JSON.stringify({
            user_email, other_email, deal_code, bid_number, notes
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        alert('Bid Submitted Successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to Submit Bid');
    });
});
