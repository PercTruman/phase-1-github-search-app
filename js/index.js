document.addEventListener('DOMContentLoaded', ()=>
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        let username = e.target.search.value

        fetch(`https://api.github.com/search/users?q=${username}`)
            .then(res=>res.json())
            .then(data =>renderResults(data))
        })
    )


function renderResults(users){
    console.log(users)
    let result = users.items[0].login
    let avatar = users.items[0].avatar_url

    let p = document.createElement('p')
        p.innerText = result

    let avatarImage = document.createElement('img')
        avatarImage.src = avatar

    let userUrl = document.createElement('a')
    let link = document.createTextNode("Link to Profile")
        userUrl.appendChild(link)
        userUrl.href = users.items[0].url
        console.log(userUrl)
    
        document.getElementById('github-container').append(p, avatarImage, userUrl)
    }



