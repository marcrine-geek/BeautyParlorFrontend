// select file input
const input = document.getElementById('file')

const uploadFile = (file) => {
    // add the file to the FormData object
    const fd = new FormData()
    fd.append('file', file)
    console.log(file)
    console.log('---------------')
    // send `POST` request
    fetch('http://54.227.122.144:8080/upload/sample/pedicure', {
      method: 'POST',
      mode:'no-cors',
      body:fd
    })
      .then(res => {
        res.json()
        window.location.replace('/employees/pages/forms/pedicure.html');
        alert('Image Uploaded Successfully');

      })
      .then(json => {
        console.log(json)        
      })
      .catch(err => console.error(err))
  }

  

// Event handler executed when a file is selected
const onSelectFile = () => uploadFile(input.files[0]);

// Add a listener on your input
// It will be triggered when a file will be selected
input.addEventListener('change', onSelectFile, false);
