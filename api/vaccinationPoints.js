const points = require('../data/vaccinationPoints.json');

export default function handler(req, res) {
  const { cityId } = req.query;

  if (!cityId) return res.status(400).json({ error: 'cityId é obrigatório' });

  const cityPoints = points.filter(p => p.cityId == cityId);

  if (cityPoints.length === 0) return res.status(404).json({ error: 'Nenhum ponto de vacinação encontrado' });

  res.status(200).json(cityPoints);
}
