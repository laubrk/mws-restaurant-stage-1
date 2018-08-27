## Udacity Front End Web Developer Restaurant Reviews Project
---

### Overview

The **Restaurant Reviews** projects, incrementally converts a static webpage to a mobile-ready web application. The static design lacked accessibility. It needed to be converted to a responsive design on different sized displays and accessible for screen reader use. A service worker was needed to begin the process of creating a seamless offline experience for users.

<img width="750px" alt="Restaurant Reviews Home" src="/img/readme-homepage.jpg">

### Running the Site

Download or clone the code into your own repository. Since you'll need a local host, install Pyton or some other similar local server. For Python version 3.x, run ` python -m http.server 8000` From there, open a browser and go to `localhost:8000`. The page will now serve.

The site has been built/modified from its original, according to the instructions below, and project Rubic. The primary features and funtionality created are:

1. **Mobile responsiveness:** All images, maps and layouts fit neatly into the page. Depending on view port, placement of the map in the details pages is either on the left for convenience reference with restaurant address and other info. Or, on view ports smaller than roughly a tablet, the map is found on the top to allow larger sizing and easy scroll through information. In all instances, the map is on top for home page reference.

2. **Accessibility:** Semantic html has been used for accessiblity, combined with the addition of proper aria labels, roles and index functionality to aid in use of screen readers and keyboard tab use. A skip map function was added to avoid unnecessary tabbing over map icons and Mapbox/leaflet copywrites and other layers included in the map references.

3. **Service Worker:** A service worker was added for caching files and serving with online connectivity is missing. This allows for an "offline first" functionality by serving available files out of cache and deleting when old versions are no longer neeed.

### Specification

Original from project start: *"You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality."*

### Original Instructions

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

  In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.
5. Leaflet.js and Mapbox  
  This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 



