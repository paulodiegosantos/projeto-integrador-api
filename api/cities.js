const cities = require('../data/cities.json');

export default function handler(req, res) {
  const { id } = req.query;

  if (id) {
    const city = cities.find(c => c.id == id);
    if (!city) return res.status(404).json({ error: 'Cidade não encontrada' });
    return res.status(200).json(city);
  }

  res.status(200).json(cities);
}
