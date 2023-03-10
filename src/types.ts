export interface Course {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  authorsList: { id: string; name: string }[];
}
