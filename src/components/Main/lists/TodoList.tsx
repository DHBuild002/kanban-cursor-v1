import React from 'react';

interface TodoListProps {
  userData: any;
}

const TodoList: React.FC<TodoListProps> = ({ userData }) => {
    return (
        <div className="list">
            <h3 className="list-title">TODO</h3>
            <div className="cards">
                {/* TODO items will be rendered here */}
                <div className="card">Example task — break feature down into cards</div>
                {userData && <div className="card">User: {userData.email}</div>}
            </div>
        </div>
    );
};

export default TodoList;