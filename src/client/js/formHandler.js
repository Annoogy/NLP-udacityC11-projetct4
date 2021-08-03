
export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputURL = document.getElementById('url').value
   if(Client.checkForURL(inputURL)) {

    console.log("::: Form Submitted :::")
    checkData('http://localhost:8081/apicloud', {url: inputURL})
  
    .then(function(res) {
       
        document.getElementById('results').innerHTML = res.text
    })
}
else{
    // Display error message if URL is not valide
    alert('Please,enter a valid URL');
    
} 
};
const checkData = async (url = "", data = {}) => {
  
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const reciecvedData = await response.json();
        console.log('Data received:', reciecvedData)
        return reciecvedData;
    } catch (error) {
        console.log('error', error);
    }}

