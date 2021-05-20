// An AJAX Code to integrate GitHub free API

// To make a request you need XMLHttpRequest
// Step 1 - Create XMLHttpRequest object
const xhr = new XMLHttpRequest()
const url = 'https://api.github.com/users'

// Step 2 - Open the portal of commiunication b/w client and server
xhr.open('GET', url)

// Step 3 - Keep track of state change
xhr.onreadystatechange = () => {

    // Step 4 - Check if readyState is 4 && responseText is 200
    if(xhr.readyState == 4 && xhr.status == 200) {

        // Step 5 - Get the data logged to the console
        const response = xhr.responseText
        console.log(response);
    }
}

// Step 5 - Send the request
xhr.send()