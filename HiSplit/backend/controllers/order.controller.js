import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

const DATA_DIR = path.resolve("data");
const DATA_FILE = path.join(DATA_DIR, "orders.json");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

const readOrders = () => {
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
};

const writeOrders = (orders) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2));
};

export const createOrder = (req, res) => {
  const orders = readOrders();

  const newOrder = {
    id: uuid(),
    customer: req.body.customer,
    total: req.body.total,
    items: req.body.items,
    createdAt: new Date(),
  };

  orders.push(newOrder);
  writeOrders(orders);

  res.json(newOrder);
};

export const getOrders = (req, res) => {
  res.json(readOrders());
};

export const deleteOrder = (req, res) => {
  const orders = readOrders();
  const updated = orders.filter(o => o.id !== req.params.id);
  writeOrders(updated);
  res.json({ success: true });
};
