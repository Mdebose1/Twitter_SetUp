const express = require("express")
const app = express()
const port = 3000
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/templates/views'))
app.use((req, res, next) => {
    console.log(`Request made at` + Date.now())
    next()

})

app.get('/', (req, res) => {
    const userData = [
        {

            name: "Derek",
            favoriteColor: "Green"
        },
        {
            name: "Lucas",
            favoriteColor: "Black"
        }
    ]

    res.render('index')

})

app.get('/profile', (req, res) => {
    res.send('This is the profile page')
})

app.get('/login', (req, res) => {
    res.send('This is the login page')
})

app.get('/register', (req, res) => {
    res.send('This is the register page')
})


app.get('/user/:id', (req, res) => {
    const userId = req.params.id

    const userData = [
            {
                id: "qwerty",
                name: "Derek",
                favoriteColor: "Green",
                posts: [
                    {
                        title: "We had so much fun in Cali!",
                        content: "This is the post content"
                    },
                    {
                        title: "My vacation was amazing!",
                        content: "This is the post content 2"
                    },
                    {
                        title: "The food was delicious!",
                        content: "This is the post content 3"
                    }
                ],
                products: [
                    "product 1"
                ]
            },
            {
                id: "ytrewq",
                name: "Lucas",
                favoriteColor: "Black",
                posts: [
                    {
                    title: "Bro, I need a vacation!",
                    content: "This is the post content",
                    // hide: false 
                },
                {
                    title: "This is a pos 2",
                    content: "This is the post content 2"
                },
                {
                    title: "This is a post 3",
                    content: "This is the post content 3"
                }
                ]
            },
            {
                id: "asdfg",
                name: "Tia",
                favoriteColor: "Pink",
                posts: [{
                    title: "This is a post",
                    content: "This is the post content"
                },
                {
                    title: "This is a pos 2",
                    content: "This is the post content 2"
                },
                {
                    title: "This is a post 3",
                    content: "This is the post content 3"
                }
                ]
            },
            {
                id: "gfdsa",
                name: "Rachel",
                favoriteColor: "Aqua",
                posts: [
                    {
                    title: "This is a post",
                    content: "This is the post content"
                },
                {
                    title: "This is a pos 2",
                    content: "This is the post content 2"
                },
                {
                    title: "This is a post 3",
                    content: "This is the post content 3"
                }
                ]
            }
        ]
    for (const user of userData) {
        if (user.id === userId) {
            res.render('profile' ,user)
            return
        }
    }
})

app.get('/user/:id/post/:postIndex', (req, res) => {
    const userId = req.params.id
    const postIndex = req.params.postIndex

    const userData = [
        {
            id: "qwerty",
            name: "Derek",
            favoriteColor: "Green",
            posts: [
                {
                    title: "This is a post",
                    content: "This is the post content"
                },
                {
                    title: "This is a pos 2",
                    content: "This is the post content 2"
                },
                {
                    title: "This is a post 3",
                    content: "This is the post content 3"
                }
            ],
            products: [
                "product 1"
            ]
        },
        {
            id: "ytrewq",
            name: "Lucas",
            favoriteColor: "Black",
            posts: [
                {
                title: "This is a post",
                content: "This is the post content"
            },
            {
                title: "This is a pos 2",
                content: "This is the post content 2"
            },
            {
                title: "This is a post 3",
                content: "This is the post content 3"
            }
            ]
        },
        {
            id: "asdfg",
            name: "Tia",
            favoriteColor: "Pink",
            posts: [{
                title: "This is a post",
                content: "This is the post content"
            },
            {
                title: "This is a pos 2",
                content: "This is the post content 2"
            },
            {
                title: "This is a post 3",
                content: "This is the post content 3"
            }
            ]
        },
        {
            id: "gfdsa",
            name: "Rachel",
            favoriteColor: "Aqua",
            posts: [
                {
                title: "This is a post",
                content: "This is the post content"
            },
            {
                title: "This is a pos 2",
                content: "This is the post content 2"
            },
            {
                title: "This is a post 3",
                content: "This is the post content 3"
            }
            ]
        }
    ]
    
    for (const user of userData) {
        if (user.id === userId) {
            const post = user.posts[postIndex]

            post.author = {
                name: user.name,
                id: user.id
            }

            res.send(post)

            } 
        }
        res.send({
            error: `User with id $(userId) was not found.`
        })   
    })

    app.listen(port, () => {
        console.log(`Server started at port ${port}`)
    })
