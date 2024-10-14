import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductSizesTabs } from './ProductSizesTabs';

const meta: Meta<typeof ProductSizesTabs> = {
  title: 'shared/ProductSizesTabs',
  component: ProductSizesTabs,
};

export default meta;

type Story = StoryObj<typeof ProductSizesTabs>;