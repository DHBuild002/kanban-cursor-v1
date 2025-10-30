import React from 'react';

const TodoList: React.FC = () => {
    return (
        <div className="list">
            <h3 className="list-title">TODO</h3>
            <div className="cards">
                {/* TODO items will be rendered here */}
                <div className="card">Example task — break feature down into cards</div>
            </div>
        </div>
    );
};

export default TodoList;