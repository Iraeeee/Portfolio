'''
"website.py" goal is handle all website interactions.
'''

from flask import Flask, render_template, request, url_for, redirect, session, abort, redirect
import os
import utils
import datetime

app = Flask(__name__)
app.secret_key = 'key'

x = datetime.datetime.now()

@app.route('/data')
def homePage():

    return {
        'Name':"Antoine", 
        "Age":"18",
        "Date":x, 
        "programming":"HTML, CSS, REACT & PYTHON"
        }

app.run(debug=True)