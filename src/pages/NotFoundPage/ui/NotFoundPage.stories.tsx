import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

// export const Light: Story = {
//   args: {},
// };

// export const Dark: Story = {
//   args: {},
//   decorators: [
//     (Story) => (
//       <div className={`app ${Theme.DARK}`}>
//         <Story />
//       </div>
//     ),
//   ],
// };
