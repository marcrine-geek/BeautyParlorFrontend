

document.getElementById('pedicure');
const urllinkk = 'http://54.227.122.144:8080/pedicure';

fetch(urllinkk)
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
        document.getElementById('pedicure').appendChild(img);
     }
})
.catch(function(error) {
    console.log(error);
});
