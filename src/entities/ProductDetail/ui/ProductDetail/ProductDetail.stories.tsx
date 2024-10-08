import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetail } from './ProductDetail';

const meta: Meta<typeof ProductDetail> = {
  title: 'shared/ProductDetail',
  component: ProductDetail,
};

export default meta;

type Story = StoryObj<typeof ProductDetail>;