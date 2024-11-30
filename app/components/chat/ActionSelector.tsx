// ActionSelector.js

import React from 'react';

export function ActionSelector({ selectedAction, setSelectedAction }) {
  const actions = ['Fold', 'Check', 'Call', 'Raise'];

  return (
    <div>
      <label htmlFor="action">Action:</label>
      <select
        id="action"
        value={selectedAction}
        onChange={(e) => setSelectedAction(e.target.value)}
      >
        <option value="">Select Action</option>
        {actions.map((action) => (
          <option key={action} value={action}>
            {action}
          </option>
        ))}
      </select>
    </div>
  );
}
