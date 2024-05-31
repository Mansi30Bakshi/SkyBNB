import React from 'react';
import Card from './Card';

const Stays = () => {
  const staysData = [
    { id: 1, imageUrl: 'https://images.pexels.com/photos/1375383/pexels-photo-1375383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', hoverText: `Moti Mahal, California` },
    { id: 2, imageUrl: 'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1200', hoverText: 'Hotel-2' },
    { id: 3, imageUrl: 'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', hoverText: 'Hotel-3' },
    { id: 4, imageUrl: 'https://images.pexels.com/photos/5667392/pexels-photo-5667392.jpeg?auto=compress&cs=tinysrgb&w=1200', hoverText: 'Hotel-4' },
    { id: 5, imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', hoverText: 'Hotel-5' },
    { id: 6, imageUrl: 'https://images.pexels.com/photos/7476234/pexels-photo-7476234.jpeg?auto=compress&cs=tinysrgb&w=1200', hoverText: 'Hotel-6' },
    { id: 7, imageUrl: 'https://images.pexels.com/photos/1207515/pexels-photo-1207515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', hoverText: 'Hotel-7' },
    { id: 8, imageUrl: 'https://images.pexels.com/photos/17291213/pexels-photo-17291213/free-photo-of-hotel-royal-tulip-in-brasilia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', hoverText: 'Hotel-8' },
    { id: 9, imageUrl: 'https://images.pexels.com/photos/4124381/pexels-photo-4124381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', hoverText: 'Hotel-9' }
    // Add more stays as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="flex flex-wrap justify-center">
          {staysData.map(stay => (
            <Card key={stay.id} imageUrl={stay.imageUrl} hoverText={stay.hoverText} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Stays;