

To accelerate the development process and resolve specific styling blockers, I utilized AI (Gemini) during this sprint. Below is the log of the prompts used:

### Prompt 1
- **Tool Used:** Gemini
- **Prompt:** "How to implement a dark and light mode theme toggle using HTML, CSS, and JS?"
- **Help Received:** Understood the core logic of using CSS variables (`:root`) and manipulating the DOM with Vanilla JavaScript to toggle a `.dark-mode` class, along with using `localStorage` to save user preferences.

### Prompt 2
- **Tool Used:** Gemini
- **Prompt:** "When switching to light mode, the text and the card background blend together and disappear. How do I fix this?"
- **Help Received:** Learned how to correctly separate and define CSS variables for the global background, card background, and text colors to maintain contrast across both themes.

### Prompt 3
- **Tool Used:** Gemini
- **Prompt:** "The text is visible now, but the card box itself blends into the page background. How can I make the card visually stand out?"
- **Help Received:** Learned to apply `box-shadow` and `border` properties in CSS to create visual separation and depth between the UI card component and the main body background.

### Prompt 4
- **Tool Used:** Gemini
- **Prompt:** "How to make the layout responsive and configure the mobile view for the navbar and service cards?"
- **Help Received:** Learned how to effectively use CSS media queries to stack Flexbox and Grid items vertically on smaller viewports, and understood the logic for collapsing navigation links into a mobile-friendly hamburger menu.

