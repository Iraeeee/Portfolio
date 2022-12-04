'''
"website.py" goal is handle all website interactions.
'''

from flask import Flask, render_template, request, url_for, redirect, session, abort, redirect
import os
import utils

app = Flask(__name__)
app.secret_key = 'key'

@app.route("/", methods=['post', 'get'])
def index():

    return "Hello world !"

app.run()