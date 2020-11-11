import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import User from "../models/User";

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AutheticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error("Incorrect email or password combination!");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error("Incorrect email or password combination!");
    }

    const token = sign({}, "792c2d310997b5743599e5300d9d0950", {
      subject: user.id,
      expiresIn: "7d",
    });

    return {
      user,
      token,
    };
  }
}

export default AutheticateUserService;