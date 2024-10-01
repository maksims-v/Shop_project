import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PopularSectionItem } from './PopularSectionItem';

const meta: Meta<typeof PopularSectionItem> = {
  title: 'shared/PopularSectionItem',
  component: PopularSectionItem,
};

export default meta;

type Story = StoryObj<typeof PopularSectionItem>;