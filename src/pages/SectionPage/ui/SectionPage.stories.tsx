import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SectionPage } from './SectionPage';

const meta: Meta<typeof SectionPage> = {
  title: 'shared/SectionPage',
  component: SectionPage,
};

export default meta;

type Story = StoryObj<typeof SectionPage>;