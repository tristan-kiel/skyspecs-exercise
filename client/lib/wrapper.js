const axios = require('axios');

const urlString = 'https://api.github.com';

//getGistsByUser('alisinabh'); //test username (this is the first guy listed in public gists)
//getGistsById('24718a69b158bafa32938055e3d80061'); //test gist id from same user

function getGistsByUser(username){
    console.log('Fetching gists by user: '+username);
    let getString =urlString+'/users/'+username+'/gists';
    console.log(getString);
    axios.get(getString)
        .then(response => {
            console.log(response.data);
        })  
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

function getGistsById(gistId){
    console.log('Fetching gist by id: '+gistId);
    let getString =urlString+'/gists/'+gistId;
    console.log(getString);
    axios.get(getString)
        .then(response => {
            console.log(response.data);
        })  
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

