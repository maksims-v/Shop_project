import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductsImageGallery } from './ProductsImageGallery';

const meta: Meta<typeof ProductsImageGallery> = {
  title: 'shared/ProductsImageGallery',
  component: ProductsImageGallery,
};

export default meta;

type Story = StoryObj<typeof ProductsImageGallery>;