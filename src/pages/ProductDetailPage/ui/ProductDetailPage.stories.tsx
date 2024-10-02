import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetailPage } from './ProductDetailPage';

const meta: Meta<typeof ProductDetailPage> = {
  title: 'shared/ProductDetailPage',
  component: ProductDetailPage,
};

export default meta;

type Story = StoryObj<typeof ProductDetailPage>;