export interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
  label: string;
  disabled?: boolean;
}
