export default interface IButton {
  icon?: "search" | "download" | "basket" | "catalog" | "delete";
  type?: "button" | "submit";
  color?: "primary" | "inherit";
  variant?: "contained" | "outlined";
  iconSize?: number;
  isUpperCase?: boolean;
  buttonSize?: "small" | "medium" | "large";
  children?: React.ReactNode;
  form?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
