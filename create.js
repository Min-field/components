/**
 *  create specific compontent on the basis of 
 *  the name typed in the command line
 */

const fs = require('fs');
const path = require('path');
const name = process.argv[2];

createCompontent(name);

function createCompontent(name){
    if(typeof name === 'undefined')
        throw new Error('compontent name requested');
    createFolder(__dirname + '/src/components/' + name);
}

function createFolder(filePath){
    fs.exists(filePath, (exist) => {
        if(exist)
            return new Error('component has existed');
        fs.mkdir(filePath, (err) => {
            if(err)
                throw err;
            else {
                createFile(filePath + '/' + name + '.vue');
                createFile(__dirname + '/test/unit/specs/' + name + '.specs.js');
            }
        });
    });
}

function createFile(path){
    fs.writeFile(path, '', (err) => {
        if(err)
            console.error(err);
    });
}



