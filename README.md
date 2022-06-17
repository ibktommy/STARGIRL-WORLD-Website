<h1 align="center">{STARGIRL WORLD}</h1>

<div align="center">
   <h2>This is a website project that I built for a business that makes and sell "Bags and Shoes". The website is mainly a showcase to give the business an online presence.
   
   <h3>The website was first designed using Adobe XD before I now proceed to code it. The website design is my sole inspiration.
      This is not a recreation of anyone's work, some design inspirations have been taken from some past projects I have worked on or learnt.
   </h3>

   <h3>I have also make the website responsive to different screen sizes so as to enable it look elegant on various devices.</h3>
</div>

<div align="center">
  <h3>
    <a href="https://github.com/ibktommy/STARGIRL-WORLD-Website">
      Website Code Files
    </a>
    <span> | </span>
    <a href="https://stargirlworld.netlify.app/" target="_blank">
      Project Website Link
    </a>
  </h3>
</div>

<!-- OVERVIEW -->

## Overview

![screenshot Desktop](https://github.com/ibktommy/STARGIRL-WORLD-Website/blob/master/images/screenshot/desktop%20View.png)

### Built With

  -[HTML](https://html.com/)<br>
  -[CSS](https://www.w3schools.com/css/css_intro.asp) <br>
  -[JAVACRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### What I Did
  <p>I used CSS Flexbox in the layout of the websites. In the DESKTOP view, some of the main containers in each sections were aligned side by side WHILE in the MOBILE view, some of the contents were arranged top to bottom in a single column using "flex-direction: column".
  </p><br>
  <p>The BUTTON in some sections were linked to other sections of the page. So when clicked, the buttons navigate to anoher section of the page in a smooth transition. The "smooth transition" is achieved as "scroll-behaviour: smooth" has been set under the html using css.
  </p><br>
  <p>The NAVIGATION MENU of the webpage has been made interactive and elegant using some CSS transitions and JS events. When the nav button is clicked, the middle line in the nav button is set to "display:none" and the top and bottom line are made to rotate using "transform: rotate() translateY()". The NAVIGATION MENU BACKGROUND is created by creating a "div" element, given an height and width, then I make it to a round shape using "border-radius" and the position is set to "fixed". Then it is placed behing the "nav button" by making its "z-index" value lower than the "nav button". It is also given a gradient background colour. When the "nav button" is clicked, the navigation menu background is scaled to a value of 100 using "transform: scale" so as to cover the whole viewport. and the "body overflow-x" is se to "hidden" so that the nav background doesn't expand beyond our viewport and creating an horizontal scrollbar.
  </p><br>
  <p>The CSS animation on the NAVIGATION LINKS is created using the pseudo elements "::before" and also setting its transform properties and "z-index" in such a way that it is behind the navigation link and it also appears from the "left bottom".
  </p><br>
  <p>In the PRODUCT SECTION, the button on the top right corner of each products when clicked display the Product name and the the order button. This is made possible using Javascript. The "active" className is added or removed from the "product details" as "toggled" is used in the Javascript code.
  </p><br>
  <p>Each Product category when clicked displays the products specific to the category. for example, when "bags" is clicked, only "Bag products" are displayed and other products are not displayed. I did this using Javascript and some CSS. 
  </p><br>
  <p>The GALLERY SECTION also uses JS code to display products at intervals. At each interval the current product is displayed for some seconds and the scales down to display the next product. The CSS "transform: scale" is used to achieve this transition. The JS code uses the "setInterval" function to do this. And Also when the page is reloaded, the products will not transition till the "Gallery section" is in the viewport. This is done using the "IntersectionObserver" method. 
  </p><br>
  <p>In the CONTACT SECTION, CSS Animation is used on the "whatsapp icon" so as to get people's attention to click on it as this directs one to the "whatsapp" contact of the business owner.
  </p>

### Contributors
  [Creative Coder](https://youtube.com/c/CreativeCoderMyanmar) - Helped with the Refactor of JS code for the "Product Section"

## Contact

- GitHub [@ibktommy](https://github.com/ibktommy)
- Twitter [@ATOMQuadri](https://twitter.com/ATOMQuadri)
