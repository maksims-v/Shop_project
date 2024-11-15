import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AddToCartNotifier } from './AddToCartNotifier';

const meta: Meta<typeof AddToCartNotifier> = {
  title: 'shared/AddToCartNotifier',
  component: AddToCartNotifier,
};

export default meta;

type Story = StoryObj<typeof AddToCartNotifier>;