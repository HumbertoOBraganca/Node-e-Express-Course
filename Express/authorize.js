const authorize = (req,res)=>{
    const {user} = req.query
    if(user === 'john'){
    req.user = {name:'john',id:3}
    next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
    console.log('authorize')
    next()
}

module.exports = authorize