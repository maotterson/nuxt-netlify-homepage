---
title: Automated Tutoring Check-In Service 
description: A working prototype to handle automated student check-ins at Lorain County Community College's Tutoring Center.
tags:
  - Node.js
  - Express.js
  - ASP.NET Core
  - Bootstrap
  - MongoDB
  - DigitalOcean
  - Azure
  - Microsoft PowerApps
projects:
  - name: REST API
    links:
    - {label: View on GitHub, href: https://github.com/maotterson/blackjack, icon: icon-github}
  - name: Front-End Website
    links:
    - {label: View on GitHub, href: https://github.com/maotterson/blackjack, icon: icon-github}
    - {label: Visit Website, href: https://github.com/maotterson/blackjack, icon: icon-external-link}
---

## Summary
A working prototype to handle automated student check-ins at Lorain County Community College's Tutoring Center. I worked in correspondence with two other tutors and the our department's leader to design and develop a greenfield solution during times we were available throughout Summer Semester at the college.  

I created and implemented a REST API/Database, researched various cloud platforms and set up continuous deployments for our applications, configured PowerAutomate functions to be consumed by our API, and developed a client-facing web application to be used by students to check-in. Others were tasked with wireframing and finalizing the page design, or had other responsibilities with the department at the time.

## Dates Developed
June 2021 - August 2021 (Paused)

## Description
- A RESTful Node.js API built using the Express.js framework

- A ASP.NET Core web application using Razor Pages (MVVM) for the front-facing webpage used by students to check in

- A MongoDB cluster to store existing tutor, student, and historical check-in state.

- Microsoft PowerAutomate HTTP endpoints used as triggers, consumed by the REST API, to integrate the Microsoft services used by our department (Teams, Outlook Calendar, Excel). 

- DigitalOcean web platforms provisioned to house each web application & MongoDB Atlas to house the database.

## Notes
Meetings were scheduled every couple of weeks to discuss design constraints, potential features, and provide general progress updates. Initially I provisioned a resource group on Azure housing web services for each web application, and a CosmosDB instance with MongoDB wire protocol for a production database. However, For the sake of simplicity in resource management, it was decided that DigitalOcean's platform may be more suitable (using Web Platform services). Since DigitalOcean doesn't natively have a preconfigured ASP.NET Core image, I containerized the application (Docker).

Our greenfield project was indefinitely paused in the beginning of August, however, as other departments at the college expressed interest in similar automated usage solutions, causing the college to look into professionally available options. At the time of pause, the REST API was fully functional in processing a check-in, and I had moved onto developing the client webpage to send form data to/consume the API.
