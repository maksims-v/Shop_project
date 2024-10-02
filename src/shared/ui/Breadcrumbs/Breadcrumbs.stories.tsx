import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageBreadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof PageBreadcrumbs> = {
  title: 'shared/PageBreadcrumbs',
  component: PageBreadcrumbs,
};

export default meta;

type Story = StoryObj<typeof PageBreadcrumbs>;
