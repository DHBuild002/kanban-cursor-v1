import React from 'react';

const DoneList: React.FC = () => {
    return (
        <div className="list">
            <h3 className="list-title">Done</h3>
            <div className="cards">
                {/* List items will go here */}
                <div className="card">Initial project scaffolded</div>
            </div>
        </div>
    );
};

export default DoneList;