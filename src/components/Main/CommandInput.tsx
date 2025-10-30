import React from 'react';

const CommandInput: React.FC = () => {
    return (
        <div className="command-input-bottom">
            <div className="command-input-inner">
                <input type="text" placeholder="Describe what you want to build — e.g. 'A fully working time machine'" />
                <button className="command-action">Generate</button>
            </div>
        </div>
    );
};

export default CommandInput;