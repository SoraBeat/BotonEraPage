import './GridBackground.css';

export default function GridBackground() {
  return (
    <div className="grid-bg" aria-hidden="true">
      <div className="grid-bg__lines" />
      <div className="grid-bg__fade" />
    </div>
  );
}
