const crypto = require('crypto');

let cats = [
  { id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6", name: "Meow", createdAt: Date.now(), updatedAt: null, deleted: false },
  { id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836", name: "Kitty", createdAt: Date.now(), updatedAt: null, deleted: false },
];

exports.create = (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ type: "Error", message: "Peab sisaldama nime" });

  const newCat = { id: crypto.randomUUID(), name, createdAt: Date.now(), updatedAt: null, deleted: false };
  cats.push(newCat);
  res.status(201).json(newCat);
};

exports.read = (req, res) => {
  const activeCats = cats.filter(cat => !cat.deleted);
  res.json(activeCats);
};

exports.update = (req, res) => {
  const { id, name } = req.body;
  const cat = cats.find(cat => cat.id === id);

  if (!cat) return res.status(404).json({ type: "Error", message: "Kassi ei leitud" });

  if (name) {
    cat.name = name;
    cat.updatedAt = Date.now();
  }

  res.json(cat);
};

exports.delete = (req, res) => {
  const { id } = req.params;
  const cat = cats.find(cat => cat.id === id);

  if (!cat) return res.status(404).json({ type: "Error", message: "Kassi ei leitud" });

  cat.deleted = true;
  res.sendStatus(204);
};
