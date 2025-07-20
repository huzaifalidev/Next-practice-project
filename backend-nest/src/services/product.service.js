import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getAllProducts = async () => {
  return await prisma.product.findMany();
};

const getProductById = async (id) => {
  return await prisma.product.findUnique({ where: { id } });
};

const createProduct = async (data) => {
  return await prisma.product.create({ data });
};

const updateProduct = async (id, data) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

const deleteProduct = async (id) => {
  return await prisma.product.delete({ where: { id } });
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
