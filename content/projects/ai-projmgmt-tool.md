---
title: AI Project Management Tool
description: A full-stack web application designed to streamline project management for software teams using AI-powered task assignment.
tags:
  - Laravel
  - Vue.js
  - Inertia.js
  - Vuetify
  - Pusher
  - Redis
  - Horizon
  - Gemini AI
projects:
  - links:
    - {label: Visit Website, href: https://projmgmt.maotterson.com, icon: icon-external-link}
video: ai-projmgr-bg.mp4
priority: 1
date: 2025
---
## Summary
A full-stack web application designed to streamline project management for teams using AI-powered task assignment, real-time updates, and a modern, reactive user interface.

## Dates Developed
Summer 2025

## Description
- A full-stack monolithic web application built on the TALL stack variant (Laravel, Inertia.js, Vue.js), with Vuetify for the component library.

- A MySQL database to store all application data including users, projects, team members, and tasks, with a schema designed for relational integrity.

- Integrated with the Google Gemini API to provide intelligent task assignment. The system builds a detailed prompt including project context, task requirements (description, difficulty), and team member details (title, availability, manager notes) to get reasoned, context-aware assignment suggestions.

- A robust background job processing system using Laravel Horizon and Redis to handle long-running AI tasks without blocking the user interface.

- Real-time frontend updates using Laravel Echo and Pusher. When a background job completes, a private event is broadcast to the user, triggering a confirmation modal to appear without needing a page refresh.

- Deployed on a DigitalOcean VPS, provisioned and managed by Laravel Forge, with Cloudflare for DNS and security.
