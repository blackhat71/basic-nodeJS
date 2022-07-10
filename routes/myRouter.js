const express  = require('express')
const router = express.Router()
// const path = require('path')


// const indexPage = path.join(__dirname, "../webpages/index.html")

router.get('/' , (req, res)=> {
    // res.type('text/html')
    // res.sendFile(indexPage)
    const name = 'Sarun Mungthnaya'
    const age = 25
    const address = '<h3>Bangkok</h3>'
    res.render('index.ejs', {name:name, age:age, address:address})
})

router.get('/product/:id' , (req, res)=> {
    res.type('text/html')
    // res.sendFile(path.join(__dirname, "../webpages/product.html"))

    const html  =  `<h1>Product : ${req.params.id}</h1>`
    res.send(html)
})

module.exports = router