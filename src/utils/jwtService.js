import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'sua_chave_secreta';

/**
 * Gera um token JWT com os dados fornecidos.
 * @param {Object} payload - Dados a serem incluídos no token.
 * @param {string} expiresIn - Tempo de expiração do token (ex: '1h', '7d').
 * @returns {string} - Token JWT gerado.
 */
export function generateToken(payload, expiresIn = '1h') {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

/**
 * Verifica e decodifica um token JWT.
 * @param {string} token - Token JWT a ser verificado.
 * @returns {Object} - Dados decodificados do token.
 * @throws {Error} - Lança erro se o token for inválido ou expirado.
 */
export function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}