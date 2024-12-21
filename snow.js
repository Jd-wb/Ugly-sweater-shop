// Snowflake Animation Script
const snowflakesContainer = document.querySelector('.snowflakes');

// Generate snowflakes
for (let i = 0; i < 50; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  snowflakesContainer.appendChild(snowflake);
}
