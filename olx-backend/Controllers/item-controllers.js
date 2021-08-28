const Dummyitems = [
    {
        id : "p1",
        name : "BMW",
        sellprice : 760000,
        age : "2017 mdoel",
        description : "2400km moved",
        location : "agra",
        creator : "u1"
        
    }
]

const getallitems = (req,res,next) =>{
    res.json({Dummyitems});
}

const getitemsbyuserid  = (req,res,next) =>{
    const userid = req.params.uid;
    const answer = Dummyitems.find(user => { return user.creator === userid});
    res.json({answer : answer})
}

const getitembyid = (req,res,next) =>{
    const itemid = req.params.pid;
    const answer = Dummyitems.find(item => {return item.id === itemid});
    res.json({answer : answer})
}

