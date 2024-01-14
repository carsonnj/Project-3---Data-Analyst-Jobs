-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/DcKosR
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


-- Table 1 Job Title
CREATE TABLE "jobs" (
    "JobTitleID" INT   NOT NULL,
    "JobTitle" VARCHAR(255)   NOT NULL,
    "SalaryEstimate" DECIMAL(10,2)   NOT NULL
);

-- Table 2: Company Data
CREATE TABLE "Company" (
    "CompanyID" INT   NOT NULL,
    "CompanyName" VARCHAR(255)   NOT NULL,
    "Location" VARCHAR(255)   NOT NULL,
    "Headquarters" VARCHAR(255)   NOT NULL,
    "Size" VARCHAR(50)   NOT NULL,
    "Founded" INT   NOT NULL,
    "Ownership" VARCHAR(255)   NOT NULL,
    "Revenue" DECIMAL(15,2)   NOT NULL,
    "Sector" VARCHAR(255)   NOT NULL,
    "Industry" VARCHAR(255)   NOT NULL
);

-- Table 3: Company Rating
CREATE TABLE "CompanyRating" (
    "CompanyID" INT   NOT NULL,
    "CompanyName" VARCHAR(255)   NOT NULL,
    "Rating" INT   NOT NULL
);

-- Table 4: Salaries
CREATE TABLE "Salaries" (
    "Age" INT   NOT NULL,
    "Gender" VARCHAR(10)   NOT NULL,
    "EducationLevel" VARCHAR(255)   NOT NULL,
    "JobTitle" VARCHAR(255)   NOT NULL,
    "YearsOfExperience" INT   NOT NULL,
    "Salary" INT   NOT NULL
);

-- Table 5 Job ID
CREATE TABLE "IDTable" (
    "JobTitleID" Int   NOT NULL,
    "CompanyID" Int   NOT NULL
);

--ALTER TABLE "Company" ADD CONSTRAINT "fk_Company_CompanyID" FOREIGN KEY("CompanyID")
--REFERENCES "CompanyRating" ("CompanyID");

--ALTER TABLE "IDTable" ADD CONSTRAINT "fk_IDTable_JobTitleID" FOREIGN KEY("JobTitleID")
--REFERENCES "jobs" ("JobTitleID");

--ALTER TABLE "IDTable" ADD CONSTRAINT "fk_IDTable_CompanyID" FOREIGN KEY("CompanyID")
--REFERENCES "Company" ("CompanyID");

