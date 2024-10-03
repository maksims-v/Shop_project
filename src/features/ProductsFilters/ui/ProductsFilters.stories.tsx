import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductsFilters } from './ProductsFilters';

const meta: Meta<typeof ProductsFilters> = {
  title: 'shared/ProductsFilters',
  component: ProductsFilters,
};

export default meta;

type Story = StoryObj<typeof ProductsFilters>;