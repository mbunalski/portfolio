import firebase_admin
from firebase_admin import db, credentials
import os


cred = credentials.Certificate("serviceAccountKey.json")

firebase_admin.initialize_app(cred, {
    'databaseURL':'https://url-app-a191c-default-rtdb.firebaseio.com/'
})

ref = db.reference('demo/')
users_ref = ref.child('users')

users_ref.set({
    'bobby':{
        'dob':'June 01, 1912',
        'sex':'male'},
    'miley':{
        'dob':'September 01, 1955',
        'sex':'female'}
    })

ref = db.reference('urlapp/')


ref.set({
    'abcdef': 'www.google.com',
    'f78ghb': 'www.yahoo.com'
    })

handle = db.reference('urlapp')

snap = ref.get()

if 'abc def' in snap.keys():
    print('Wammy1')
else:
    print('o nooooo')