import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'shared/Pagination',
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;