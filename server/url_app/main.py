import firebase_admin
from firebase_admin import db, credentials
import os


cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

