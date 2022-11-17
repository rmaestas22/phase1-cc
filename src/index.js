// write your code here

fetch("http://localhost:3000/images/1")
    .then(r => r.json())
    .then(data => {
        // data.forEach(puppy => {
        //     createImage(puppy)
        // }
        // )
        dogDetails(data)
        likedButton(data)

    })


function dogDetails (curly){

    let dogTitle = document.querySelector(".title").textContent = curly.title
    let dogImage = document.querySelector(".image").src = curly.image

    let comments = document.querySelector(".comments")
    comments.innerHTML = ""
    curly.comments.forEach(comment =>{
        let newCom = document.createElement("li")
        newCom.textContent = comment.content

        comments.appendChild(newCom);

    })
}
addComment()

function addComment(){
    let form = document.querySelector("#comment-form")
    console.log(form)


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let newComment = e.target['comment'].value
        let newCom = document.createElement("li")
        newCom.textContent = newComment
        let comments = document.querySelector(".comments")


        comments.append(newCom)

    })

}

function likedButton(wet) {
    console.log(wet)
    let likeCount = document.querySelector('#like-count')
    let like = document.querySelector("#like-button")
    likeCount.textContent = `${wet.likes} likes`;
    let likeNumber = wet.likes

    like.addEventListener("click", (e) => {

        likeNumber++
        
        likeCount.textContent = `${likeNumber} likes`;

    })
}

