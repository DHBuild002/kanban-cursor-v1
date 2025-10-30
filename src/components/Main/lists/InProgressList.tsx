import React from 'react';

const InProgressList: React.FC = () => {
    return (
        <div className="list">
            <h3 className="list-title">In Progress</h3>
            <div className="cards">
                {/* List items will go here */}
                <div className="card">Working on API integration</div>
            </div>
        </div>
    );
};

export default InProgressList;