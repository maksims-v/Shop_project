import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchPage } from '..';

const meta: Meta<typeof SearchPage> = {
  title: 'shared/SearchPage',
  component: SearchPage,
};

export default meta;

type Story = StoryObj<typeof SearchPage>;
