import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllUsersService = async () => {
  return await prisma.user.findMany();
};

export const getUserByIdService = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const createUserService = async (data) => {
  return await prisma.user.create({
    data,
  });
};

export const updateUserService = async (id, data) => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUserService = async (id) => {
  return await prisma.user.delete({
    where: { id },
  });
};
