import { Board } from './types';

export const initialBoard: Board = {
  todo: [
    {
      id: '1',
      title: 'Task 1',
      subheading: 'Subheading for Task 1',
      promptDetails: '### Prompt for Task 1\n\nThis is the prompt for task 1 in Markdown.',
      deadline: '2025-11-10',
    },
    {
      id: '2',
      title: 'Task 2',
      subheading: 'Subheading for Task 2',
      promptDetails: '### Prompt for Task 2\n\nThis is the prompt for task 2 in Markdown.',
    },
  ],
  inProgress: [
    {
      id: '3',
      title: 'Task 3',
      subheading: 'Subheading for Task 3',
      promptDetails: '### Prompt for Task 3\n\nThis is the prompt for task 3 in Markdown.',
      deadline: '2025-11-12',
    },
  ],
  done: [
    {
      id: '4',
      title: 'Task 4',
      subheading: 'Subheading for Task 4',
      promptDetails: '### Prompt for Task 4\n\nThis is the prompt for task 4 in Markdown.',
    },
  ],
};
