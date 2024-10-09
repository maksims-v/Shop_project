import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Basket from './Basket';

const meta: Meta<typeof Basket> = {
  title: 'shared/Basket',
  component: Basket,
};

export default meta;

type Story = StoryObj<typeof Basket>;
