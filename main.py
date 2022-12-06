'''

The file 'main.py' was made to run the website and import libraries.

npm install react-scripts
npm install node-sass
npm install react-router-dom
npm install @emailjs/browser
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/react-fontawesome
npm install animate.css
npm install gsap-trial
npm install loaders.css
npm install react-leaflet
npm install react-loaders

'''

# This part is going to import the librairies and the dependencies.

import utils

debugMode = utils.variables.debugMode(True) # debugMode was set to True. debugMode.status() will return boolean value of debugMode.

try:

    import website
    import data

except Exception as excep:

    if debugMode.status(): print(excep)