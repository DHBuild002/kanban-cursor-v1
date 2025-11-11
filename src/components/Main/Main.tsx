import React, { useState, useEffect } from 'react';
import CommandInput from './CommandInput';
import TodoList from './lists/TodoList';
import InProgressList from './lists/InProgressList';
import DoneList from './lists/DoneList';
import { useAuth } from '../../context/AuthContext';

const Main: React.FC = () => {
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const { session } = useAuth();

    useEffect(() => {
        const fetchUserData = async () => {
            if (session) {
                try {
                    const response = await fetch('http://localhost:3001/api/user-data', {
                        headers: {
                            'Authorization': `Bearer ${session.access_token}`,
                        },
                    });

                    if (!response.ok) {
                        throw new Error('Failed to fetch user data');
                    }

                    const data = await response.json();
                    setUserData(data);
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchUserData();
    }, [session]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="lists">
                <TodoList userData={userData} />
                <InProgressList userData={userData} />
                <DoneList userData={userData} />
            </div>

            {/* Command input stays visually at bottom (fixed) but keep component here for render order */}
            <CommandInput />
        </div>
    );
};

export default Main;