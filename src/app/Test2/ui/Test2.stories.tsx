import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Test2 } from './Test2';

const meta: Meta<typeof Test2> = {
  title: 'shared/Test2',
  component: Test2,
};

export default meta;

type Story = StoryObj<typeof Test2>;