export interface Task {
  level: number;
  title: string;
  content: ContentItem[];
  answer: string;
}

export interface ContentItem {
  tag: string;
  anim: string;
  options?: string;
  dish?: DishItem;
}

interface DishItem {
  tag: string;
  anim: string;
  options?: string;
}

export type Hint = {
  level: number;
  hint: boolean;
};
