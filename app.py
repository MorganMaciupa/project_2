import numpy as np
import psycopg2
import sqlalchemy
from flask_pymongo import PyMongo

from flask import Flask, jsonify, render_template

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/mars_data_app")

# Create an instance of Flask
app = Flask(__name__)

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    return render_template("index.html")
    # return (
    #     f"Available Routes:<br/>"
    #     f"-------------------------------<br/>"
    #     f"/api/v1.0/population_vs_state<br/>"
    #     f"/api/v1.0/income_vs_state</br>"
    #     f"/api/v1.0/energyproduction_vs_state</br>"
    #     f"/api/v1.0/population_vs_energytype</br>"
    #     f"/api/v1.0/income_vs_energytype</br>"
    #     f"/api/v1.0/map</br>"
    # )



@app.route("/api/v1.0/population_vs_state")
def population():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return API of population details per state and energy production per state"""

    # Query all incident details
    results = session.query(aus_population.State, aus_population.Male, aus_population.Female, aus_population.Total
                            ).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all incidents
    incident_test = []

    for mine_id, incident_activity, incident_category, incident_day, incident_month, incident_type, incident_year in results:

        incident_test_dict = {}

        incident_test_dict["mine_id"] = mine_id
        incident_test_dict["incident_activity"] = incident_activity
        incident_test_dict["incident_category"] = incident_category
        incident_test_dict["incident_day"] = incident_day
        incident_test_dict["incident_month"] = incident_month
        incident_test_dict["incident_type"] = incident_type
        incident_test_dict["incident_year"] = incident_year

        incident_test.append(incident_test_dict)

    return jsonify(incident_test)



if __name__ == "__main__":
    app.run(debug=True)