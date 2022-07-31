import { useEffect, useState } from 'react';

function Switch({ on, onChange }) {
  const [enabled, setEnabled] = useState(on);
  useEffect(() => {
    setEnabled(on);
  }, [on])
  return (
    <div
      className={`switch switch-slider ${enabled ? 'on' : ''}`}
      onClick={() => {
        typeof onChange === 'function' && onChange(!enabled);
        setEnabled(!enabled);
      }}
    >
      <div className="handle"></div>
    </div>
  );
}
export default Switch;
