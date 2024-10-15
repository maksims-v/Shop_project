import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BasketPage from './BasketPage';

const meta: Meta<typeof BasketPage> = {
  title: 'pages/BasketPage',
  component: BasketPage,
};

export default meta;

type Story = StoryObj<typeof BasketPage>;
