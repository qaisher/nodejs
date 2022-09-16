const fs = require('fs');

//read files

fs.readFile('./textFile.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});


//write files

fs.writeFile('./textFile.txt', 'this line is written by nodejs', () => {
    console.log('file written!');
});

//if file does not exist, it creates the file
fs.writeFile('./textFileNew.txt', 'file created with nodejs', () => {
    console.log('file written!');
})


//directories

//creation
fs.mkdir('./myFolder', (err) => {
    if(err){
        console.log(err);
    }
    console.log('folder created');
})

//windows style folder creation

function createNewFolder(i = 1){
    if(!fs.existsSync(`./New Folder (${i})`)){
        fs.mkdir(`./New Folder (${i})`, (err) => {
            if(err){
                console.log(err);
            }
        })
    }
    else{
        i++;
        createNewFolder(i)
    }
}

createNewFolder();




//deleting directory

if(fs.existsSync('./myFolder')){
    fs.rmdir('./myFolder', (err) => {
        console.log(err);
    })
    console.log('directory deleted');
}


//deleting file

if(fs.existsSync('./deleteMe.txt')){
    fs.unlink('./deleteMe.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}