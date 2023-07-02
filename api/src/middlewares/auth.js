import jwt from "jsonwebtoken";

export default function auth(request, response, next) {
  const { authorization } = request.headers;

  if(!authorization) {
    return response.json({ message: "Não Autorizado" }, 401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, 'c1f76f0e4e22ce2d1753ae95ee79070a');
    const { id } = data;
    request.userId = id;

    return next();
  } catch (error) {
    return response.json({ message: "Não Autorizado" }, 401);
  }
}