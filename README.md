# mean_app_eds
## Minor deviation from specification
- port **3000** used instead of **4200**
- **localhost:3000/employee** instead of **localhost:3000/employees**

## Demo
https://youtu.be/lOeP_WCEybs

## Usage
valid username and passwords:
- user1@gmail.com, password1
- user2@gmail.com, password2

### For express app (inside nodeProject folder)
Angular files were *built* using the `ng build` command to *public* folder

When inside the nodeProject folder,
Install the dependencies:
```
npm install
```
Run app: runs server on localhost:3000 (changed since 4200 was angular default)
```
npm start
```
### For angular
Install the dependencies:
```
npm install
```
serve on localhost 4200:
```
ng serve
```
## Features
All mandatory requirements fulfilled including:
- Login form (**localhost:3000**)
  - empty field validation
  - valid e-mail validation
  - authentication
  - authorization using *jwt*
- Employee table (**localhost:3000/employee**)
  - material components used
  - SCSS to change odd row bg color
  - created using the API provided using an authorized path
- Employee details page **localhost:3000/employee/{id}**
  - material components used
  - used currency pipe
  - used custom pip for age
  - implemented attribute directive
