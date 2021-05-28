export default function withRedColor(Component) {
  return function RedColoredComponent(props) {
    return (
      <Component
        {...props}
        style={{ ...props.style, color: "red", border: "1px solid blue" }}
        job="Video editor"
      />
    );
  };
}
