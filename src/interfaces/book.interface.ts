interface Villain {
  name: string;
  url: string;
}

export interface IBook {
  ISBN: string;
  Notes: string[];
  Pages: number;
  Publisher: string;
  Title: string;
  Year: number;
  created_at: string;
  handle: string;
  id: number;
  villains: Villain[];
}

export interface BooksResponse {
  data: IBook[];
}
