
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from '../Cards/Card';
// import './Home.css';
// const Dashboard = ({ dishes2 }) => {

//   const [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/dishes`);
//       setDishes(response.data);
//     };

//     if (!dishes2 || dishes2.length === 0) {
//       fetchData();
//     } else {
//       setDishes(dishes2);
//     }
//   }, [dishes2]);

//   const togglePublished = (dishId) => {
//     axios.patch(`${process.env.REACT_APP_API_URL}/api/dishes/${dishId}/toggle`).then((response) => {
//       setDishes((prevDishes) =>
//         prevDishes.map((dish) =>
//           dish.dishId === dishId ? response.data : dish
//         )
//       );
//     }).catch(error => {
//       console.error('Error toggling dish status:', error);
//     });
//   };

//   return (
//     <div className="dashboard">
//       {dishes.length > 0 ? dishes.map((dish) => (
//         <Card key={dish.dishId} dish={dish} togglePublished={togglePublished} />
//       )) : <>Loading</>}
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Cards/Card';
import './Home.css';
import io from 'socket.io-client';

const Dashboard = ({ dishes2 }) => {
  const [dishes, setDishes] = useState([]);
  const socket = io(`${process.env.REACT_APP_API_URL}`);
console.log(`${process.env.REACT_APP_API_URL}`)
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connection established');
      socket.emit('hello from frontend');
    });

    socket.on('dishUpdated', (updatedDish) => {
      setDishes((prevDishes) =>
        prevDishes.map((dish) =>
          dish.dishId === updatedDish.dishId ? updatedDish : dish
        )
      );
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/dishes`);
        setDishes(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    if (!dishes2 || dishes2.length === 0) {
      fetchData();
    } else {
      setDishes(dishes2);
    }
  }, [dishes2]);

  const togglePublished = (dishId) => {
    axios.patch(`${process.env.REACT_APP_API_URL}/api/dishes/${dishId}/toggle`).then((response) => {
      setDishes((prevDishes) =>
        prevDishes.map((dish) =>
          dish.dishId === dishId ? response.data : dish
        )
      );
    }).catch(error => {
      console.error('Error toggling dish status:', error);
    });
  };

  return (
    <div className="dashboard">
      {dishes.length > 0 ? dishes.map((dish) => (
        <Card key={dish.dishId} dish={dish} togglePublished={togglePublished} />
      )) : <>Loading</>}
    </div>
  );
};

export default Dashboard;


