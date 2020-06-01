exports.add = async (req, res) => {
    try{
        const db = req.app.locals.db;
        var items     = await db.collection('items'),
            body      = req.body || {},
            title     = body.title,
            type      = body.type,
            isPending = body.isPending,
            price     = body.price;
        items.insertOne({
            title: title,
            isPending: isPending,
            type: type,
            price: price
        });
    } catch(err){
        console.log(err);
    }
}
  