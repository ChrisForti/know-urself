type ContainerProps = { children: React.ReactNode };

export function Container(props: ContainerProps) {
  return <div>{props.children}</div>;
}
