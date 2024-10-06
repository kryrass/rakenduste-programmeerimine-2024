const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const SECRET_KEY =
  "d8b2afacc092d7ec995a67e49a4a5e9bf02bad21732c3aebc22c6f0ca9eddad6e61ced776fd4d1618f19ee04d8ef51d7bed65bff8dcf1eba68fb6bb44c5231bf";

  let todos = [
    { id: "5", name: "Pese nõud", priority: 2, createdAt: Date.now(), updatedAt: null, deleted: false },
    { id: "2", name: "Tee tolmuimejaga", priority: 4, createdAt: Date.now(), updatedAt: null, deleted: false },
  ];

exports.create = [
  check("name").notEmpty().withMessage("Nimi on kohustuslik"),
  check("priority")
    .isInt({ min: 1, max: 5 })
    .withMessage("Prioriteet peab olema number 1 ja 5 vahel"),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, priority } = req.body;
    const newTodo = {
      id: crypto.randomUUID(),
      name,
      priority,
      createdAt: Date.now(),
      updatedAt: null,
      deleted: false,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
  },
];

exports.read = (req, res) => {
  const activeTodos = todos.filter((todo) => !todo.deleted);
  res.json(activeTodos);
};

exports.update = [
  check("id").notEmpty().withMessage("ID on kohustuslik"),
  check("priority").optional().isInt({ min: 1, max: 5 }).withMessage("Prioriteet peab olema number 1 ja 5 vahel"),
  
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id, name, priority } = req.body;
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) return res.status(404).json({ type: "Error", message: "Todod ei leitud" });

    if (name) todo.name = name;
    if (priority !== undefined) todo.priority = priority;
    todo.updatedAt = Date.now();

    return res.status(200).json({ message: "Todo on uuendatud", todo });
  },
];

exports.delete = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) return res.status(404).json({ type: "Error", message: "Todod ei leitud" });

  todo.deleted = true;
  res.sendStatus(204);
};

// JTW algab siit
exports.generateToken = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ type: "Error", message: "Peab sisaldama nime" });
  }

  const token = jwt.sign({ name }, SECRET_KEY, { expiresIn: "1h" });
  return res.json({ token });
};

exports.verifyToken = (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ type: "Error", message: "Peab sisaldama tokeni" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ type: "Error", message: "Vale token" });
    }

    return res.json({ message: "Token on korrektne", decoded });
  });
};
