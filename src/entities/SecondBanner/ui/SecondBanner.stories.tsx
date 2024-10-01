import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SecondBanner } from './SecondBanner';

const meta: Meta<typeof SecondBanner> = {
  title: 'shared/SecondBanner',
  component: SecondBanner,
};

export default meta;

type Story = StoryObj<typeof SecondBanner>;
