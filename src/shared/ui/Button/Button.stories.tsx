import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Error: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.ERROR,
  },
};

export const SizeM: Story = {
  args: {
    children: 'Text',
  },
};

export const SizeL: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.L,
  },
};

export const SizeXL: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.XL,
  },
};
