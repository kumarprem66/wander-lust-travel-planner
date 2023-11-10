# Wanderlust Travel Planner

Wanderlust Travel Planner is a Flask-based web application that helps users plan their trips, manage destinations, create itineraries, and track expenses efficiently.

## Features

- **Database Integration:** Utilizes MySQL for backend data storage.
- **Destination Management:** Allows users to manage travel destinations, including CRUD operations.
- **Itinerary Planning:** Create, update, and delete activities in trip itineraries.
- **Expense Tracking:** Record and categorize trip expenses.
- **Weather Integration (Optional):** Provides weather forecasts for selected destinations.
- **Collaborative Planning (Optional):** Allows users to invite others to plan trips collaboratively.
- **Data Export (Optional):** Export trip itineraries and expense reports in different formats (e.g., PDF, CSV).

## Getting Started

1. **Prerequisites:**
   - Python
   - Flask
   - MySQL

2. **Installation:**
   ```bash
   pip install -r requirements.txt
3. **Database Setup:**

Create a MySQL database and update the configuration in config.py.
Run the following commands to set up the database:

```bash
flask db init
flask db migrate
flask db upgrade

4. **Running the Application:**
```bash
flask run

5.**Accessing the Application:**
```bash
Open a web browser and go to http://127.0.0.1:5000/.


***Additional Notes***
Weather API Key:
If using the weather integration feature, obtain an API key from [Weather API Provider] and update it in the configuration.

Collaborative Planning:
(Provide any additional instructions or considerations for collaborative planning)

Data Export:
(Explain how to use data export features)

**Contributing**
Contributions are welcome! Please follow the contribution guidelines before submitting pull requests.

**License**
This project is licensed under the MIT License.

**Destination**
# Get Destinations
curl http://127.0.0.1:5000/destinations

# Create Destination
curl -X POST http://127.0.0.1:5000/destination -H "Content-Type: application/json" -d '{"name": "New Destination", "description": "Description", "location": "Location"}'

# Update Destination
curl -X PUT http://127.0.0.1:5000/destination/1 -H "Content-Type: application/json" -d '{"name": "Updated Destination", "description": "Updated Description", "location": "Updated Location"}'

# Delete Destination
curl -X DELETE http://127.0.0.1:5000/destination/1


**Itineraries**
# Get Itineraries
curl http://127.0.0.1:5000/itineraries

# Create Itinerary
curl -X POST http://127.0.0.1:5000/itinerary -H "Content-Type: application/json" -d '{"destination_id": 1, "activities": [{"name": "Activity 1", "description": "Description 1", "date": "2023-11-10"}]}'

# Update Itinerary
curl -X PUT http://127.0.0.1:5000/itinerary/1 -H "Content-Type: application/json" -d '{"destination_id": 1, "activities": [{"name": "Updated Activity", "description": "Updated Description", "date": "2023-11-10"}]}'

# Delete Itinerary
curl -X DELETE http://127.0.0.1:5000/itinerary/1

**Expenses**
# Get Expenses
curl http://127.0.0.1:5000/expenses

# Create Expense
curl -X POST http://127.0.0.1:5000/expense -H "Content-Type: application/json" -d '{"name": "New Expense", "amount": 100.0, "category": "Food", "date": "2023-11-10"}'

# Update Expense
curl -X PUT http://127.0.0.1:5000/expense/1 -H "Content-Type: application/json" -d '{"name": "Updated Expense", "amount": 150.0, "category": "Accommodation", "date": "2023-11-10"}'

# Delete Expense
curl -X DELETE http://127.0.0.1:5000/expense/1


**Hotels**
# Get Hotels
curl http://127.0.0.1:5000/hotels

# Create Hotel
curl -X POST http://127.0.0.1:5000/hotel -H "Content-Type: application/json" -d '{"name": "New Hotel", "location": "Hotel Location", "pricePerNight": 120.0, "amenities": "Wi-Fi"}'

# Update Hotel
curl -X PUT http://127.0.0.1:5000/hotel/1 -H "Content-Type: application/json" -d '{"name": "Updated Hotel", "location": "Updated Location", "pricePerNight": 150.0, "amenities": "Swimming Pool"}'

# Delete Hotel
curl -X DELETE http://127.0.0.1:5000/hotel/1






