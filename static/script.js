let c = document.getElementById("hw");

// c.addEventListener('click',function(){
//     alert("click")
// })

document.addEventListener('DOMContentLoaded', function () {
    // Fetch destinations from the API
    fetch('http://127.0.0.1:5000/destinations')
        .then(response => response.json())
        .then(destinations => {

            

            // console.log(destinations.destinations)
            // Display destinations
            const destinationsContainer = document.getElementById('destinations-container');
            destinations.destinations.forEach(destination => {
                const destinationCard = createDestinationCard(destination);
                destinationsContainer.appendChild(destinationCard);
                
            });
        })
        .catch(error => console.error('Error fetching destinations:', error));

    function createDestinationCard(destination) {
        const card = document.createElement('div');
        card.className = 'destinations-card';

        const title = document.createElement('h2');
        title.textContent = destination.name;

        const description = document.createElement('p');
        description.textContent = destination.description;

        const location = document.createElement('p');
        location.textContent = `Location: ${destination.location}`;

        const exportButton = document.createElement('button');
        exportButton.textContent = 'Export Itinerary (PDF)';
        exportButton.addEventListener('click', () => {
            // Trigger API endpoint for exporting itinerary in PDF format
            window.open(`/destination/${destination.id}/export/itinerary/pdf`, '_blank');
        });

        const weatherCheck = document.createElement("button");
        weatherCheck.textContent = "Check Weather";
        weatherCheck.addEventListener('click',()=>{
            // Trigger API endpoint for weather info
            window.open(`/destination/${destination.id}/weather`)
        })

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', () => {
            // Make a DELETE request to the Flask route
            fetch(`/destination/${destination.id}/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                alert(data.message);  // Log the server response
                // Optionally, you can update the UI to reflect the deletion
                // For example, remove the destination from the UI
                // destinationCard.remove();
            })
            .catch(error => {
                alert('Error deleting destination:', error);
            });
        });


        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(location);
        card.appendChild(exportButton);
        card.appendChild(weatherCheck);
        card.appendChild(deleteButton);

        return card;
    }
});

document.getElementById("create_dest").addEventListener('click',()=>{
    window.location.href = '/destination';

})
