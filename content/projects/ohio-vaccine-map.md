---
title: Ohio Vaccine Map
description: A web application displaying currently available COVID-19 vaccine
  appointments on a map.
tags:
  - Angular
  - Node.js
  - Express.js
  - MongoDB
  - Googleapis
  - DigitalOcean
---
## Summary
A web application displaying currently available COVID-19 vaccine
appointments in Ohio on a map.

## Dates Developed
March 2021 - April 2021

## Contents
- A full-stack monolithic web application (MEAN), consisting of a Node.js back-end using the Express.js framework and a front-end built on the Angular framework.

- A MongoDB instance to store appointment state and normalized location data

- MongoDB Realm serverless functions to reach out to an external data source at scheduled intervals and normalize the data to be stored locally at a reduced capacity.

- A DigitalOcean web platform housing the web application, and a MongoDB Atlas cluster for the database.

- External communication with Google Maps & Places API-related services & VaccineSpotter.org API containing scraped appointment data.