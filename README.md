# Project-3---Data-Analyst-Jobs

Trevor Baum, Shivantika Bisen, Nick Carsen, Mamatha Etikyala, Tamara Hundich, Swati Kallepalli

1/21/2024

Michigan State University edX Data Analytics Bootcamp 

https://project-3-data-visuals.onrender.com/

# Introduction 
    - The main objective for this group project was for the group as a whole to find datasets to show the relationships between jobs that were available in the United States for data analysts. Once theses datasets were found, they needed to be turned into visualizations to be hosted on a local html server. The back end team was assigned to clean up the data and place the cleaned up code into a database. Once the data was cleaned, the development team created visualizations to be then used by the front end team to host on a local html server. 

# Installation 
    - The following applications were required to be installed for this Project: PG Admin 4/Postgres, Pandas, Python, Flask, NodeJs/NPM, Javascript, Vite, Seaborn, D3, and AnyChart. 
    - https://openlayers.org/doc/quickstart.html was used for the insallation process for OpenLayers 


# Configuration 
    - Back End Development: Mamatha, Trevor, Nick, Tamara
        - Mamatha, Trevor, and Nick pulled the datasets and created more than 5 tables in Postgres.
        - Trevor, Tamara, and Nick cleaned the datasets for the relevant information to create the data that was needed for development stage. 
        - Nick, Trevor, and Mamatha collaborated to create the ERD diagram using QuickDBD
        - Tamara created SQL databases in Postgres to generate the map, which was then hosted into Supabase Database Cloud.
        - Tamara used Python Anywhere to deploy the Flask application for the map in the cloud. This Flask API was then used to access the database in front end apps. 
    - Development: Shivantika, Tamara, Nick, Swati
        - Nick used the Salary Data Cleaned CSV with the Salary Data and created html, Javascripts, and Python tables to create a line graph based on education level to be used for visualization. 
        - Tamara used OpenLayers Javascript to create a mapping visualization of the open job postings using the USA City Data, Jobs, and Data Analyst Clean Data. The shapes created were based on the company size. The size of the shapes were based on the highest average salary. The color of the shapes determined the total amount of job offers. 
        - Shivantika created HTML/JSON, and Javascripts for job availability in different sectors/industries. She also created pie chart to show salary with work experience from the datasets provided. 
        - Swati used AnyChart to create the front end design for the main page of the HTML website.  
    - Front End Development: Tamara
        - Tamara deployed Render to host the local HTML to a Vite static webserver. 
        - Tamara also used NPM as a build tool to manage dependencies and make deployment simple for front end process. 
        - Tamara created buttons to show the different visualizations that were to be accessed on the local webpage which was then hosted to Render. 

# Data Resources/References: 
Data Resources:
 1) https://www.kaggle.com/code/yashvi/data-analyst-jobs-visualization
    - About Dataset
        - This dataset was created by Picklesueat and contains more than 2000 job listings for data analyst positions, with features such as:
            - Salary Estimate
            - Location
            - Company Rating
            - Job Description and more
 2) https://www.kaggle.com/datasets/mohithsairamreddy/salary-data
    - About Dataset
        - The dataset was obtained from multiple sources, including surveys, job posting sites, and other publicly available sources. A total of 6704 data points were collected. The dataset included five variables:
            - Age
            - Experience
            - Job Role
            - Education level
            - Salary
 3) https://simplemaps.com/data/us-cities
    - About Dataset:
        - This data stems from combination of United States Census Bureau, USGS, and American Community Survey which includes listings of USA Cities, latitude and longtitude for location of cities, and population for reference mapping. 
References
1) Supabase 
    https://supabase.com/
2) Python Anywhere
    https://pythonanywhere.com
3) Render
    https://render.com 

# Analysis 
- There 1559 total job postings found in the datasets. 
- There were 68 companies where the company headquarters were located outside of the US. Even though this was data was not analyzed, this would be for complications down the road, if this were to be analyzed. 
- Based on the datasets, it was determined that the higher the education level, the higher the pay of salary. However, there was not much contrast between the high school level of education and bachelor's degree. The pay range was almost parallel to each other. 
- The large jumps in salary were beween 0 and 5 years of experience. In this time frame, the average salary increased over 126%.
- The stop state for job offers was California at 441. California also had the highest paying salary estimated for job offers. 

# Discrepancies 
- The data had to be cleaned as there were more than 1 company listed in the dataset and there were discrepancies with companies being named the same. Also there were some companies found to be diffent based off of different attributes matching the listing. Some examples found were Assembly, RiverPoint, BOLD, Mondo, and Xoriant Corporation. 
- There were city names found in the original data set that had to be relabeled due to not populating into the Postgres database based off of different cities found on the US Census Bureau website. Some examples found were DC Ranch, AZ (Scottsdale), Greenwood Village, CO (Arapahoe), Henderson, CO (Thornton), and Woodland Hills, CA (Los Angeles). 
- There were issues with the Vite configuration setup when trying to deploy a multipage static website. 


