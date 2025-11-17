import React from 'react';

interface DoneListProps {
  userData: any;
}

const DoneList: React.FC<DoneListProps> = ({ userData }) => {
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