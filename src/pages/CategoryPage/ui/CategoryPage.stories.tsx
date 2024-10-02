import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CategoryPage } from '..';

const meta: Meta<typeof CategoryPage> = {
  title: 'shared/CategoryPage',
  component: CategoryPage,
};

export default meta;

type Story = StoryObj<typeof CategoryPage>;
