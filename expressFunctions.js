module.exports.expressFunctions = function(app) {
    app.get('/cart', async (req, res) => {
    
        res.json({
            products: ['laptop','mobile']
        })
    
    })
    app.get('/auth',(req,res)=>{
        if(req.query.email==='p.saiaakash517@gmail.com' && req.query.pass==='aakash'){
            res.json({username: 'aakash', id: 'asdf'})
        }
        else res.send(false)
    })
}