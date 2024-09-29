const crypto = require('crypto');
const cats = [

    {
        "id": "273d6d9c-73b3-427b-9a7a-b04eba5bc231",
        "name": "Kitty",
        "createdAt": 1727099042168,
        "updatedAt": 1727099054279,
        "deleted": false
    },
    {
        "id": "d0c54aec-1363-48eb-91cd-b924fedb81ca",
        "name": "Snoopy",
        "createdAt": 1727099330507,
        "updatedAt": null,
        "deleted": false
    }
];

exports.create = (req, res) => {
    const { name }= req.body;

    const newCat ={
        id: crypto.randomUUID(),
        name:  name,
        createdAt:Date.now(),
        updatedAt: null,
        deleted: false,
    }

    cats.push(newCat); 

    res.send(newCat);
};

exports.read = (req, res) => {
    res.send(cats)
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

   
    const cat = cats.find((cat) => cat.id === id);

    if (cat) {
        
        cat.name = name || cat.name; 
        cat.updatedAt = Date.now(); 

        res.send(cat);
    } else {
        res.status(404).send({ message: "Cat not found" });
    }
};
exports.delete = (req, res) => {};