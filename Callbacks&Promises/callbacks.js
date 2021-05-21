// JavaScript is Synchronous by default | Not goining to wait for everyone to finish - Line by line execution

const posts = [
    { title: 'Post One', body: 'This is Post One' },
    { title: 'Post Two', body: 'This is Post Two' }
]

function getPosts() {
    setTimeout( () => {

        let output = ''
        posts.forEach( (post) => {
            output += `<li> ${post.body} </li>`
        } )
        document.getElementById('main').innerHTML = output

    }, 2000)
}

// CALLBACKS
function createPost(post, callback) {
    setTimeout( () => {
        posts.push(post)
        
        // Telling that this execution is going to take longer
        callback()
    }, 3000)
}

createPost({ title: 'Post Three', body: 'This is Post Three' }, getPosts) // 3 secs
getPosts() // 2 seconds

// THE TWO PROBLEMS WITH CALLBACK
// 1. It cannnot handle errors
// 2. The excution time remains the same even the error exist