export interface card {
  answer: number;
  num: number;
  options: string[];
  questions: string;
}

export interface cardDeck {
  deck_id: string;
  deck_name: string;
  filename: string;
  image_url: string;
}
