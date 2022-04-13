const secondHand = document.querySelector(".hand");

const setDate = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	console.log(seconds);
};

setInterval(setDate, 1000);

module.exports = setDate;
