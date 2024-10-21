import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Test branch } from './Test branch';

const meta: Meta<typeof Test branch> = {
  title: 'shared/Test branch',
  component: Test branch,
};

export default meta;

type Story = StoryObj<typeof Test branch>;