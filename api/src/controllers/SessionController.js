import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export default {
  async createSession(request, response) {
    

    try {
      const { email, password } = request.body;
      const user = await prisma.user.findUnique({where: {email} });

      if(!user) {
        return response.json({ message: "Usuário ou Senha incorretos" }); //email
      }

      const checkPassword = await compare(password, user.password);
      if (!checkPassword) {
        return response.json({ message: "Usuário ou Senha incorretos" });
      }

      const token = jwt.sign({id: user.id}, "c1f76f0e4e22ce2d1753ae95ee79070a", {
        expiresIn: '1d'
      });

      delete user.password;
      return response.json({ 
        error: false,
        message: "Login efetuado com sucesso. Aguarde...!",
        user, 
        token 
      })

    } catch (error) {
      return response.json({ message: error.message})
    }
  }
}