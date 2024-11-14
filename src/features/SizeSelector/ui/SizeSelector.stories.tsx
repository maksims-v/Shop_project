import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SizeSelector } from './SizeSelector';

const meta: Meta<typeof SizeSelector> = {
  title: 'shared/SizeSelector',
  component: SizeSelector,
};

export default meta;

type Story = StoryObj<typeof SizeSelector>;