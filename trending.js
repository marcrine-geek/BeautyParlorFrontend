

document.getElementById('trending');
const urllink = 'http://127.0.0.1:5000/trending/hair';

fetch(urllink)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
    length=data.data.length;
    console.log(length);
    for(i=0;i<length;i++)
    {
        var img = 
        document.createElement('img')
        img.src = data.data[i];
        img.style="width:30%; height:30%; padding:30px"
        console.log(img.src)
        document.getElementById('trending').appendChild(img);
     }
})
.catch(function(error) {
    console.log(error);
});
