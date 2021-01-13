export default function withBoldFont(Component) {
  return function BoldFontedComponent(props) {
    return (
      <Component
        {...props}
        style={{ ...props.style, fontWeight: 900, fontSize: "35px" }}
      />
    );
  };
}
