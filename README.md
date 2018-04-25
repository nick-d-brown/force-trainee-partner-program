<!-- This is a basic template for ReadMe files -->

# Star Wars Force Finder
##Mentor/Mentee Partner Program

  

## :mag: Table of contents :mag:

  
### [1-Description](https://github.com/nick-d-brown/force-trainee-partner-program/blob/master/#Description)
### [2-Technologies](https://github.com/nick-d-brown/force-trainee-partner-program/blob/master/#Technologies)
### [3-Challenges](https://github.com/nick-d-brown/force-trainee-partner-program/blob/master/#Challenges)
### [4-Issues](https://github.com/nick-d-brown/force-trainee-partner-program/blob/master/#Issues)
### [5-Desired Features](https://github.com/nick-d-brown/force-trainee-partner-program/blob/master/#Desired-Features)
### [6-Contributors](https://github.com/nick-d-brown/force-trainee-partner-program/blob/master/#Contributors)

 ---

### 1-Description :page\_facing\_up:

This project is a mentor/mentee partner app that allows users to complete a survey which, based on their answers, will pair them with a force mentor and a fellow mentee. As a customized rendition of a "friend finder" app, this allows users to experience a fun and enjoyable interface and experience, while thier data is handled on the backend. A working version of the app can be found at the link listed above. 

To complete the survey a user must click on the button on the main landing page. Upon clicking, the user is redirected to the survey page where they will be asked star wars themed personalty questions. Based on their ansers a user will be given a score of 10-50 (not seen by the user) to be used to determine whether they are meant for the dark side or the light side of the force.

On the backend the server stores the user's name, picture link, and catchphrase. The client side JavaScript then completes an AJAX request from the API's get route for the stored JSON response. upon receipt of the data, the client then checks the users total score against the score of the mentors (5 mentors total) and assigns a mentor to the user. Then the user's score is checked against the scores of the mentees from most recent to least. If no direct score match is found, it then checks for scores within 2 points, then 5, and finally 10. If the user doesn't have a match by then, one of 5 default mentees will match.

Once a mentor and mentee are matched, a Modal will appear with the user's matched pair. When the user clicks the "Home" button they will return home, and when they click close the inputs reset.

> **Note:** Below is an image of the landing page for the project.




![Book image](https://github.com/nick-d-brown/force-trainee-partner-program/blob/master/app/public/assets/images/forcefinder.png)


---


### 2-Technologies  :computer:

  This project utilizes the following technologies:
  > **Note: Delete this note and the following technologies that do not apply.**


- HTML
- CSS
- Vanilla JavaScript
- [jQuery](https://jquery.com/)
- [Twitter Bootstrap](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- AJAX
- APIs
- Responsive Design
- [Heroku](https://www.heroku.com/)

---

### 3-Challenges :scream::boom:

> **Note:** This section is meant for beginners an idea of what the *crux* technology was for this project. Ideally by seeing this first they will be able tackle the hard problem first to start the learning/absorption process as soon as possible.

The most challenging part of this project was determining the proper syntax for the server post/get actions. This mostly required a trial and error process to see which things were being posted and which were not. I relied on the express documentation and Stack Overflow for any syntax questions, but again mostly had to do a lot of individual request/response testing. Use the links listed below to learn more about the technology and remember **you will eventually learn how everything works!**

---**Suggested Links**---

-[Express.js - getting started](https://expressjs.com/en/starter/installing.html)
-[Stack Overflow](https://stackoverflow.com/)

### 4-Issues :question::exclamation:

  Currently there are no known issues that need to be resolved. If you find an issue please submit it using the issues tab, or contact [Nick Brown](https://github.com/nick-d-brown/).

---

### 5-Desired Features :star2:

If You would like to propose a feature to add please feel free to create a PR to add it to the list. **We love it when others can help propose ideas!**


### 6-Contributors :raised_hands:

- [Nick Brown](https://github.com/nick-d-brown/)

> **PS:** If you would like to contribute please contact Nick Brown on GitHub or at n.brown.professional@gmail.com. We welcome bot first time contributors and experienced developers with critical feedback. 


## Thanks for visiting!