---
title: Spotify CLI Tool
description: A command line tool to control Spotify through their web API.
tags:
  - C#
  - ASP.NET
projects:
  - links:
    - {label: View on GitHub, href: https://github.com/maotterson/spotcli, icon: icon-github}
video: 
priority: 0
date: April 2022 - May 2022

---
## Summary
A command line tool to control Spotify through their web API.

## Dates Developed
April 2022 - May 2022

## Description
- Used a basic dependency injection container within a console application template.
- Using the CommandLineParser package, many basic features were added for corresponding player commands, such as playing a track, creating a playlist, etc 
- Commands were mapped to Mediatr IRequest objects via a queue, enabling more elaborate functionality (e.g. chaining calls to the Spotify API to search for a provided track, then play the top result).
- Refit was used for resolving the corresponding Web API endpoints into response objects.
