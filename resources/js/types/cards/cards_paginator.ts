import type { Card } from '@/types/cards/card';

// explicit datatype declaration

export type CardsPaginator = {
  current_page: number;
  data: Array<Card>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<Object>;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};