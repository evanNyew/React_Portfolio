//import {createClient} from 'contentful'
const contentful = require("contentful");

export default contentful.createClient({
    space:process.env.REACT_APP_API_SPACE,
    accessToken:process.env.REACT_APP_ACCESS_TOKEN
});


// CFPAT-Yoo4HejwwlnilrJn4MBI0lDcHwaFe__63Subh4oUxig