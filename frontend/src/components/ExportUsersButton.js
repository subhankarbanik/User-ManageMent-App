import React, { useState } from 'react';
import axios from 'axios';

function ExportUsersButton({ selectedUsers }) {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5001/api/users/export', { ids: selectedUsers });
      const blob = new Blob([response.data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'users.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleExport} disabled={!selectedUsers.length || loading}>
      {loading ? 'Exporting...' : 'Export'}
    </button>
  );
}

export default ExportUsersButton;
