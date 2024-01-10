import { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import Footer from '../Footer';

import PropTypes from 'prop-types';

NotificationItem.propTypes = {
    notification: PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        title: PropTypes.string,
        message: PropTypes.string,
    }).isRequired,
    removeNotification: PropTypes.func.isRequired,
};

function NotificationItem ({notification, removeNotification}) {
    return(
        <div key={notification.id} 
        className='flex flex-col bg-[gray] text-white p-3 mb-5 rounded-lg gap-y-2 w-[40rem]'
        >
            <h2 className='font-bold'>{notification.title}</h2>
            <p className='leading-5'>{notification.message}</p>
            <button
                className='bg-[red] text-white px-3 py-1 rounded-lg w-20 self-end'
                onClick={() => removeNotification(notification.id)}
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
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt rhoncus nisi, non sollicitudin tortor convallis in. Cras pretium, arcu at mollis fringilla, ex quam faucibus arcu, sed bibendum nibh nibh nec elit.', 
            icon: 'path/to/error/icon.png', 
            timestamp: '2022-01-01 12:00:00' 
        },
        { 
            id: 2, 
            type: 'success', 
            title: 'Success', 
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt rhoncus nisi, non sollicitudin tortor convallis in. Cras pretium, arcu at mollis fringilla, ex quam faucibus arcu, sed bibendum nibh nibh nec elit.', 
            icon: 'path/to/success/icon.png', 
            timestamp: '2022-01-02 12:00:00' 
        },
        { 
            id: 3, 
            type: 'info', 
            title: 'Info', 
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt rhoncus nisi, non sollicitudin tortor convallis in. Cras pretium, arcu at mollis fringilla, ex quam faucibus arcu, sed bibendum nibh nibh nec elit.', 
            icon: 'path/to/info/icon.png', 
            timestamp: '2022-01-03 12:00:00' 
        },
        { 
            id: 4, 
            type: 'warning', 
            title: 'Warning', 
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt rhoncus nisi, non sollicitudin tortor convallis in. Cras pretium, arcu at mollis fringilla, ex quam faucibus arcu, sed bibendum nibh nibh nec elit.', 
            icon: 'path/to/warning/icon.png', 
            timestamp: '2022-01-04 12:00:00' 
        },
        // Add more notifications here
    ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div>
        <DashboardNavbar />
        <div className='flex h-screen'>
            <DashboardSidebar/>
            <div className='flex flex-col items-center overflow-scroll w-screen p-10'>
                <h1 className='text-3xl font-bold mb-10'>Notifications</h1>
                {notifications.map(notification => (
                    <NotificationItem
                        key={notification.id}
                        notification={notification}
                        removeNotification={removeNotification}
                    />
                ))}
            </div>
        </div>
        <Footer/>
        
    </div>
    
  );
}

export default NotificationPage;