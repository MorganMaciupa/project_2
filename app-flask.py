from flask import Flask, jsonify
import numpy as np
import json
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from bs4 import BeautifulSoup as bs
import requests
from splinter import Browser
from flask import render_template