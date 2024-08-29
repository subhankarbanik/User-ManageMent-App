import React from 'react';

function DeleteUserPopup({ onDelete, onCancel }) {
  return (
    <div className="modal">
      <p>Are you sure you want to delete this user?</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default DeleteUserPopup;
