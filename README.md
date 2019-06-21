# Petflix

#### By _**Katlin Anderson**_
_https://knbanderson.github.io/Petflix/_
## Description

_A Netflix clone using Angular._
_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2_

## Setup/Installation Requirements

* _$ git clone https://github.com/KNBAnderson/Petflix;_
* _Create an account at https://firebase.google.com/_
* _On Firebase, create a project called bottled-air-marketplace_
* _Create a realtime database within the project_
* _Change the rules of the database to_
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
* _Create file in src/app/api-keys.ts_
* _Add this code to the new file. Your personal keys can be found in your projects settings_
```
  export const masterFirebaseConfig = {
    apiKey: XXXX,
    authDomain: "bottled-air-marketplace.firebaseapp.com",
    databaseURL: "https://bottled-air-marketplace.firebaseio.com",
    projectId: "bottled-air-marketplace",
    storageBucket: "",
    messagingSenderId: XXXX,
    appId: XXXX
};
```
* _$ npm install;_
* _$ ng serve
*_Navigate to `http://localhost:4200/`_

## Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| The wesite will show a splash page to pick which pet is watching | - | - |
| The website will have a main video page | - | - |
| The splash page will allow the user to edit pet accounts | - | - |
| The splash page will allow the user to add new pet accounts | - | - |
| Clicking on a pet account will lead you to that pet's main page | click "Fido" | /browse |
| The main video page will have a large vidoe on the top half of the page | - | - |
| The main video page will have rows of video thumbails with a carousel effect | - | - |
| Clicking on a video thumbnail will take the user to full page yourtubr video | - | - |
| Hovering over a video thumbnail will enlarge it and show more details | - | - |


## Installation Requirements
* Run in browser

## Known Bugs
There are no known bugs.

## Technologies Used

_HTML_
_CSS_
_TypeScript_
_Angular_
_Node_
_Bootstrap_
_Jasmine_
_Linter_
_Babel_

### License

*This software is licensed under the GPL license.*

Copyright (c) 2019 **_Katlin Anderson_**