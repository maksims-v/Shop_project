import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductsListBanner } from './ProductsListBanner';

const meta: Meta<typeof ProductsListBanner> = {
  title: 'shared/ProductsListBanner',
  component: ProductsListBanner,
};

export default meta;

type Story = StoryObj<typeof ProductsListBanner>;