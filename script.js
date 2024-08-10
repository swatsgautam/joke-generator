/*document.addEventListener('DOMContentLoaded', function() {

    const jokeButton = document.getElementById('joke-btn');
    const jokeDisplay = document.getElementById('joke');
    
    function getJoke() { // Function to fetch a joke from API
        
        const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object
        
        xhr.onload = function() { // Define the behavior when the request completes

            if (xhr.status === 200) { // Check if the request was successful
                try {                    
                    const response = JSON.parse(xhr.responseText); // Parse the JSON response
                    
                    const joke = response.value; // Get the joke from the response
                    
                    jokeDisplay.innerHTML = joke; // Display the joke in the div

                } catch (e) {

                    jokeDisplay.innerHTML = 'Error parsing joke.'; // Handle JSON parsing errors
                }
            } else {
                
                jokeDisplay.innerHTML = 'Oops! Something went wrong.'; // Handle errors from the API
            }
        };
       
        xhr.onerror = function() {  // Define the behavior in case of an error
            jokeDisplay.innerHTML = 'Oops! Something went wrong.';
        };

       
        xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);  // Initialize and send the request
        xhr.send();
    }
    
    jokeButton.addEventListener('click', getJoke); // Add an event listener to the button to trigger the joke generation

    getJoke();  //fetch a joke when the page first loads
});

*/









document.addEventListener('DOMContentLoaded', function() {

    const jokeButton = document.getElementById('joke-btn');
    const jokeDisplay = document.getElementById('joke');
    const container = document.querySelector('.container');
    
    function getJoke() { 
        
        fetch('https://api.chucknorris.io/jokes/random') 
            .then(response => {
                if (!response.ok) { 
                    throw new Error('network failure');
                }
                return response.json(); 
            })
            .then(data => {
                const joke = data.value; 
                jokeDisplay.innerHTML = joke; 
                setRandomColor();
            })
            .catch(error => {
                console.error('there is a problem ', error);
                jokeDisplay.innerHTML = 'Something went wrong.'; 
            });
    }
    function setRandomColor() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        container.style.backgroundColor = randomColor; 
    }
    
    jokeButton.addEventListener('click', getJoke); 

    getJoke(); 
});
