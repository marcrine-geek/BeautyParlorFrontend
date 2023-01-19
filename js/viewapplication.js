

// document.getElementById('applications');
const list = document.createDocumentFragment();
const url = 'http://54.227.122.144:8080/files';

fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
    length=data.data.length;
    console.log(length);
    for(i=0;i<length;i++)
    {
        var iframe = 
        document.createElement('iframe')
        iframe.src = data.data[i];
        console.log(iframe.src)
        iframe.type="application/pdf"
        iframe.height="400px"
        iframe.width="350px"
        document.getElementById('applications').appendChild(iframe);
     }
})
.catch(function(error) {
    console.log(error);
});
