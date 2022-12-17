

const facebook=async function(req,res){
    res.send(req.user)
}

module.exports={facebook}