import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postProducts = createAsyncThunk(
  'PostProducts',
  async (products, { rejectWithValue }) => {
    console.log('hai');

    try {
      // Используем цикл для отправки запросов
      const products = [];

      for (const product of products) {
        // Создаем payload внутри цикла и сразу используем его в запросе
        const uniqueSlug = `${product.slug}-${product.id}`;

        const response = await axios.post(
          `https://shop-z684.onrender.com/api/products`,
          {
            data: {
              title: product.title,
              image: null,
              category: product.category,
              price: product.price,
              new: product.new,
              sale: product.sale,
              oldPrice: product.oldPrice,
              brand: product.brand,
              size: product.size.map((s) => ({
                id: s.id,
                size: s.size,
                qnty: s.qnty,
              })),
              color: product.color,
              pageCategory: product.pageCategory,
              clearance: product.clearance,
              techDescription: product.techDescription,
              description: product.description,
              slug: uniqueSlug,
              showOnBanner: product.showOnBanner,
              showOnCategoryBanner: product.showOnCategoryBanner,
              equipmentCategory: product.equipmentCategory,
              lampsLanternsCategory: product.lampsLanternsCategory,
              campSleepCategory: product.campSleepCategory,
              toolsGearCategory: product.toolsGearCategory,
              otherCategory: product.otherCategory,
              clothingCategory: product.clothingCategory,
              footwearCategory: product.footwearCategory,
              accessoriesCategory: product.accessoriesCategory,
              activityCategory: product.activityCategory,
            },
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        // Обработка ответа
        if (!response.data) {
          throw new Error('error');
        }

        // Задержка в 2 секунды перед следующим запросом
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      // Если все запросы успешны, можно вернуть последний ответ
      return response.data;
    } catch (e) {
      console.error(e); // Выводим ошибку в консоль для отладки
      return rejectWithValue('Что-то случилось (');
    }
  },
);
