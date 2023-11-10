# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

# class Destination(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255), unique=True, nullable=False)
#     description = db.Column(db.String(255))
#     location = db.Column(db.String(255))

#     hotels = db.relationship('Hotel', backref='destination', lazy=True)

# class Hotel(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255))
#     location = db.Column(db.String(255))
#     price_per_night = db.Column(db.Float)
#     amenities = db.Column(db.String(255))

#     rooms = db.relationship('Room', backref='hotel', lazy=True)
#     destination_id = db.Column(db.Integer, db.ForeignKey('destination.id'), nullable=False)

# class Expense(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255))
#     amount = db.Column(db.Float)
#     category = db.Column(db.String(255))
#     date = db.Column(db.Date)

# class Itinerary(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     destination_id = db.Column(db.Integer, db.ForeignKey('destination.id'), nullable=False)

#     activities = db.relationship('Activity', backref='itinerary', lazy=True)

# class Room(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255))
#     size = db.Column(db.String(255))
#     sleeps = db.Column(db.Integer)
#     bed_type = db.Column(db.String(255))
#     price = db.Column(db.Float)
#     hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'), nullable=False)

# class Activity(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255))
#     description = db.Column(db.String(255))
#     date = db.Column(db.Date)

#     itinerary_id = db.Column(db.Integer, db.ForeignKey('itinerary.id'), nullable=False)
