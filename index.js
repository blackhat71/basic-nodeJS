const http = require('http')
const  fs = require('fs')
const url  =require('url')

const indexPagge = fs.readFileSync(`${__dirname}/webpages/index.html`)
const productPage = fs.readFileSync(`${__dirname}/webpages/product.html`)

const server = http.createServer( (req, res)=> {
    const pathName = req.url
    console.log(`url = ${pathName}`)

    const {pathname, query} = url.parse(req.url, true)
    if(pathname === "/"){
        res.end(indexPagge)
    }else if(pathname === "/product"){
        if(query.id == 1){
            console.log(`product  = ${query.id}`)
        }
        res.end(productPage)
    }else{
        res.writeHead(404)
        res.end("<h1>Not  Found</h1>")
    }
       
})
server.listen(3001, ()=> {
    console.log("start server na ja :3001")
})