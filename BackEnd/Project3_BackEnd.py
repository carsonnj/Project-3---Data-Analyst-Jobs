# Import the dependencies.
import flask
from flask import Flask,jsonify

import os
from supabase import create_client, Client

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)

# instance of flask application
app = Flask(__name__)

# home route that returns below text when root url is accessed
    
@app.route("/jobs_per_city")
def jobs_per_city():
    try:
        response = supabase.table('jobs_per_city_view').select("*").execute()
        return jsonify(response.data)
    except Exception as ex:
        print(ex)
        return "Failed to find"
    
@app.route('/')
def hello_world():
    return 'Hello from Flask!' 

@app.route("/cities")
def cities():
    try:
        response = supabase.table('cities_view').select("city", "state_id", "lat", "lng", "population", "job_count", "low_salary_avg", "high_salary_avg", "size").execute()
        return jsonify(response.data)
    except Exception as ex:
        return "Failed to find"
    
@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

if __name__ == '__main__':  
   app.run()