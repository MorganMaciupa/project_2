-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/FKoqKn
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Aus_Income" (
    "State" string   NOT NULL,
    "Median_Income" int   NOT NULL
);

CREATE TABLE "Aus_Population" (
    "State" string   NOT NULL,
    "Male" string   NOT NULL,
    "Female" string   NOT NULL,
    "Total" int   NOT NULL
);

CREATE TABLE "14_15_Energy_Production" (
    "Reporting_Entity" string   NOT NULL,
    "Facility_Name" string   NOT NULL,
    "State" string   NOT NULL,
    "Electricity_Production_GJ" int   NOT NULL,
    "Electricity_Production_MWh" int   NOT NULL,
    "Primary_Fuel" string   NOT NULL,
    "Year" int   NOT NULL
);

CREATE TABLE "17_18_Energy_Production" (
    "Reporting_Entity" string   NOT NULL,
    "Facility_Name" string   NOT NULL,
    "State" string   NOT NULL,
    "Electricity_Production_GJ" int   NOT NULL,
    "Electricity_Production_MWh" int   NOT NULL,
    "Primary_Fuel" string   NOT NULL,
    "Year" int   NOT NULL
);

CREATE TABLE "20_21_Energy_Production" (
    "Reporting_Entity" string   NOT NULL,
    "Facility_Name" string   NOT NULL,
    "State" string   NOT NULL,
    "Electricity_Production_GJ" int   NOT NULL,
    "Electricity_Production_MWh" int   NOT NULL,
    "Primary_Fuel" string   NOT NULL,
    "Year" int   NOT NULL
);

