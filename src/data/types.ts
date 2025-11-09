export interface Card {
  id: string;
  title: string;
  subheading: string;
  promptDetails: string; // Stored as Markdown
  deadline?: string; // Optional deadline
}

export interface Board {
  todo: Card[];
  inProgress: Card[];
  done: Card[];
}
