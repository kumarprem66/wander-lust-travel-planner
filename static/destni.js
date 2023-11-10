// scripts.js

function createDestination() {
    const form = document.getElementById('destinationForm');
    const name = form.elements['name'].value;
    const description = form.elements['description'].value;
    const location = form.elements['location'].value;

    // Example: Send data to the server using fetch

    if(name != "" && description != "" && location != ""){
        fetch('http://127.0.0.1:5000/destination', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                description: description,
                location: location,
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Destination created:', data);
    
            window.location.href = "/";
            // Optionally, redirect or perform other actions after successful creation
        })
        .catch(error => {
            alert('Error creating destination:', error);
        });
    }else{
        alert("Empty value is not allowed")
    }
   
}
