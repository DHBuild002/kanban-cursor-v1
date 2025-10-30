import React from 'react';
import CommandInput from './CommandInput';
import TodoList from './lists/TodoList';
import InProgressList from './lists/InProgressList';
import DoneList from './lists/DoneList';

const Main: React.FC = () => {
    return (
        <div className="container">
            <div className="lists">
                <TodoList />
                <InProgressList />
                <DoneList />
            </div>

            {/* Command input stays visually at bottom (fixed) but keep component here for render order */}
            <CommandInput />
        </div>
    );
};

export default Main;