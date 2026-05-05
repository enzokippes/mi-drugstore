import prisma from '../config/db';

export const getProductsService = async () => {
  return await prisma.product.findMany({
    include: {
      category: true,
    },
  });
};

export const getProductByIdService = async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });
};

export const createProductService = async (data: { name: string; price: number; stock: number; categoryId: string }) => {
  return await prisma.product.create({
    data,
  });
};

export const updateProductService = async (id: string, data: { name?: string; price?: number; stock?: number; categoryId?: string }) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

export const deleteProductService = async (id: string) => {
  return await prisma.product.delete({
    where: { id },
  });
};
