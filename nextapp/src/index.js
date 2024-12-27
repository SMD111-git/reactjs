import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Chai from './chai';
import Update from './update';


const root = ReactDOM.createRoot(document.getElementById('root'));//by this quire we will access the index.html file  as the "root" is the id of the div inside the body.
root.render(
  <React.StrictMode>
    <App />
    <Chai/>
    <Update />
  </React.StrictMode>
);
/**the app is a customized tag by using file.js or jsx
    and we see that in app.js the file constains a function in that we have a html tag retruning in the function 
    by this method we donot need write whole html tag inside the index by just add file.js and import it to index.js files ,
    this will reflect it into the index.html or the output display, this index.html is loacted in the public folder.
    if we notices the point in above code we are using the get quire to get the acess of index.html file and reload the tags or content into the index.html file, 
    this type of function or coustimzed tags are used to in single page reload and this dirtecly get loaded into the index.html by the automation of script by the package.json filed
    it get loaded into it., this render the files and load it in index.html files  */

