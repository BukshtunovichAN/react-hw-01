import React from 'react';

function Statistics({ title, stats}) {
    return (
        <section className="statistics">
  {title && <h2>{title}</h2>}

  <ul className="stat-list">
    {stats.map(stat => (
        <li key={stat.id} className="item" style={{ backgroundColor: getRandomColor() }}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}</span>
        </li>
        ))}
  </ul>
</section>
    )
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


export default Statistics;