// An AJAX Code to integrate GitHub free API | Asysnchronous JS & XML (AJAX)

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
        const response = xhr.responseText   // format - JSON (string)

        // console.log(response[0].login)  // undefined

        // parse the JSON into Array of Objects
        const responseObject = JSON.parse(response)
        console.log(responseObject[0].login)  // undefined

        // Get the div from the HTML Mrakup
        const container = document.querySelector('#main')


        for(let i = 0; i < 5; i++) {
            const image = document.createElement('img')
            image.setAttribute('src', responseObject[i].avatar_url)

            const heading = document.createElement('h3')
            heading.textContent = `User ${i+1} is : ${responseObject[i].login}`

            const rule = document.createElement('hr')

            container.appendChild(image)
            container.appendChild(heading)
            container.appendChild(rule)
        }

        console.log(response);
    }
}

// Step 5 - Send the request
xhr.send()