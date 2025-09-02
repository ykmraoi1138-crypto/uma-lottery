type Props = {
  name: string;
  color?: string;
  size?: number;
};
export default function Icon({ name, color = "inherit", size = 24 }: Props) {
  return (
    <span
      className="material-icons"
      style={{ color, fontSize: size }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}