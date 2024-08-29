
import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteUserPopup from "./DeleteUserPopup";
import ExportUsersButton from "./ExportUsersButton";
import './user.css'

function UserTable() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Number of users per page

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("https://user-management-app-1-nl7t.onrender.com/api/users");
    setUsers(response.data);
  };

  const handleDelete = async () => {
    await axios.delete(`https://user-management-app-1-nl7t.onrender.com/api/users/${deleteUserId}`);
    setDeleteUserId(null);
    fetchUsers();
  };

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="user-table-container">
      <table>
        <thead>
          <tr>
            <th>Select Users</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user._id}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setSelectedUsers((prev) =>
                      checked
                        ? [...prev, user._id]
                        : prev.filter((id) => id !== user._id)
                    );
                  }}
                />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => setDeleteUserId(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map((num) => (
          <button
            key={num + 1}
            onClick={() => paginate(num + 1)}
            className={currentPage === num + 1 ? "active" : ""}
            style={{ margin: '0 5px' }}
          >
            {num + 1}
            
          </button>
        ))}
      </div>
      {deleteUserId && (
        <DeleteUserPopup
          onDelete={handleDelete}
          onCancel={() => setDeleteUserId(null)}
        />
      )}
      <ExportUsersButton selectedUsers={selectedUsers} />
    </div>
  );
}

export default UserTable;
