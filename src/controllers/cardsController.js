exports.cards = async (req, res) => {
    try{
        const db = req.app.locals.db;
        var items = await db.collection('items').find({});
        var acItems = [];

        items.forEach(function(item){
            acItems.push(item);
        }).then(function(){
            res.send(acItems);
        });
    } catch(err){
        console.log(err);
    }
}
  

exports.adminCards = async (req, res, next) => {
    try{
        const db = req.app.locals.db;
        var items = await db.collection('items').find({isPending : true });
        var acItems = [];

        items.forEach(function(item){
            acItems.push(item);
        }).then(function(){
            res.send(acItems);
        });
    } catch(err){
        console.log(err);
    }
}