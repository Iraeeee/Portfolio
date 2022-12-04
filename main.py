'''

The file 'main.py' was made to run the website and import libraries.

'''

# This part is going to import the librairies and the dependencies.

import utils

debugMode = utils.variables.debugMode(True) # debugMode was set to True. debugMode.status() will return boolean value of debugMode.

try:

    import website
    import data

except Exception as excep:

    if debugMode.status() == True: print(excep)