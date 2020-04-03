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
  