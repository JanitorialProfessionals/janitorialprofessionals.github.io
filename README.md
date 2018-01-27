# JPro Website
This is a static website for JPro, a Janitorial Services company. This site has 2 pages:
- index.html
- spanish.html
Each page has a sticky nav bar and the sections below:
- Hero
- About
- Services
- Photos
- Testimonials
- Contact (footer)

## Content Editing
- GitHub provides a friendly web interface to browse and edit html, css, and JavaScript files. To edit a file, just open it and click on the pencil icon on the top righ. Once the changes are made click on the Commit button located on the bottom of the page.
- Make sure to update both pages (English and Spanish) any time a navigation link is updated or whenever a structural change is made.
- Images can't be updated via the GitHub web interfae. Please contact a web developer if you need to update images.

## Developer notes
- This website uses [Bootstrap 4](http://getbootstrap.com/), and it was built using [startbootstrap-scrolling-nav](https://github.com/BlackrockDigital/startbootstrap-scrolling-nav) as a base.
- Minimal animation is supplied by [GreenSock](https://greensock.com/gsap) libraries.

## Contact Form
The contact form is powered by https://formspree.io/. The destination address can be updated on the `<form>` tag as shown below:
```
<form action="https://formspree.io/email@example.com" method="POST">
```
Make sure to update this value before going live.
