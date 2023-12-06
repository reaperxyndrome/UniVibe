import { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import Footer from '../Footer';

import PropTypes from 'prop-types';

NotificationItem.propTypes = {
    notification: PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        message: PropTypes.string,
    }).isRequired,
    removeNotification: PropTypes.func.isRequired,
};

function NotificationItem ({notification, removeNotification}) {
    return(
        <div key={notification.id} 
        className='bg-[gray] text-white p-5 mb-5 rounded-lg'
        >
            {notification.message}
            <button
                onClick={() => removeNotification(notification.id)}
                style={{ marginLeft: '10px' }}
            >
                Dismiss
            </button>
        </div>
    )
}
function NotificationPage() {
    const [notifications, setNotifications] = useState([
        { 
            id: 1, 
            type: 'error', 
            title: 'Error', 
            message: 'This is an error message', 
            icon: 'path/to/error/icon.png', 
            timestamp: '2022-01-01 12:00:00' 
        },
        { 
            id: 2, 
            type: 'success', 
            title: 'Success', 
            message: 'This is a success message', 
            icon: 'path/to/success/icon.png', 
            timestamp: '2022-01-01 12:01:00' 
        },
        // Add more notifications here
    ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div>
        <DashboardNavbar />
        <div className='flex'>
            <DashboardSidebar/>
            <div>
            {notifications.map(notification => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                    removeNotification={removeNotification}>
                </NotificationItem>
            ))}
            </div>
        </div>
        <Footer/>
        
    </div>
    
  );
}

export default NotificationPage;