import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SimilarProducts } from './SimilarProducts';

const meta: Meta<typeof SimilarProducts> = {
  title: 'shared/SimilarProducts',
  component: SimilarProducts,
};

export default meta;

type Story = StoryObj<typeof SimilarProducts>;