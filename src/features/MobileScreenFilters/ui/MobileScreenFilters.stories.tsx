import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MobileScreenFilters } from './MobileScreenFilters';

const meta: Meta<typeof MobileScreenFilters> = {
  title: 'shared/MobileScreenFilters',
  component: MobileScreenFilters,
};

export default meta;

type Story = StoryObj<typeof MobileScreenFilters>;