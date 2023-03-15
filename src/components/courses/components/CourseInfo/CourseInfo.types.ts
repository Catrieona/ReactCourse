import { CourseCardProps } from '../CourseCard/CourseCard.types';

export interface CourseInfoProps {
  authorsList: { id: string; name: string }[];
  coursesList: CourseCardProps[];
}
