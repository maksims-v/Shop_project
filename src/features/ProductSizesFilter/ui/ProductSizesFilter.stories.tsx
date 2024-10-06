import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductSizesFilter } from './ProductSizesFilter';

const meta: Meta<typeof ProductSizesFilter> = {
  title: 'shared/ProductSizesFilter',
  component: ProductSizesFilter,
};

export default meta;

type Story = StoryObj<typeof ProductSizesFilter>;