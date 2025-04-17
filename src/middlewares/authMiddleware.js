import { generateToken, verifyToken } from '../utils/jwtService.js';

export function login(req, res) {
  const { username, password } = req.body;

  // Valide o usuário (exemplo simplificado)
  if (username === 'admin' && password === '1234') {
    const token = generateToken({ username }, '2h'); // Token válido por 2 horas
    return res.json({ token });
  }

  return res.status(401).json({ error: 'Credenciais inválidas' });
}

export function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // Exemplo: "Bearer <token>"
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Adiciona os dados do token ao objeto `req`
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido ou expirado' });
  }
}