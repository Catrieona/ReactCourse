export interface InputProps {
  placeholder: string;
  className?: string;
  value?: string;
  label?: string;
  onChange: any;
  name: string;
  type: 'text' | 'number' | 'password' | 'email';
}
