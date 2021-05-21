// An AJAX Code to integrate GitHub free API | Asysnchronous JS & XML (AJAX)

// To make a request you need XMLHttpRequest
// Step 1 - Create XMLHttpRequest object
const xhr = new XMLHttpRequest()
console.log(`The Ready state at Point 1 is: ${xhr.readyState}`); // 0
const url = 'https://api.github.com/users'

// Step 2 - Open the portal of commiunication b/w client and server
xhr.open('GET', url)
console.log(`The Ready state at Point 2 is: ${xhr.readyState}`); // 1

// Step 3 - Keep track of state change
xhr.onreadystatechange = () => {

    console.log(`The Ready state at Point 3 is: ${xhr.readyState}`); 
    // 2, 3, 4

    // Step 4 - Check if readyState is 4 && responseText is 200
    if(xhr.readyState == 4 && xhr.status == 200) {

        // Step 5 - Get the data logged to the console | Logical Part of handling data
        const response = xhr.responseText   // format - JSON (string)

        // console.log(response[0].login)  // undefined

        // parse the JSON into Array of Objects
        const responseObject = JSON.parse(response)
        console.log(responseObject[1].login)  

        // Get the div from the HTML Mrakup
        const container = document.querySelector('#main')


        for(let i = 0; i < 30; i++) {
            const image = document.createElement('img')
            image.setAttribute('src', responseObject[i].avatar_url)

            const heading = document.createElement('h3')
            heading.textContent = `User ${i+1} is : ${responseObject[i].login}`

            const rule = document.createElement('hr')

            container.appendChild(image)
            container.appendChild(heading)
            container.appendChild(rule)
        }

        // console.log(response);
        console.log(`The Ready state at Point 4 is: ${xhr.readyState}`);
    }
}

console.log(`The Ready state at Point 5 is: ${xhr.readyState}`);

// Step 6 - Send the request
xhr.send()