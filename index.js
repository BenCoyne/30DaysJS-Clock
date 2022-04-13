const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".minute-hand");
const hoursHand = document.querySelector(".hour-hand");

const setDate = () => {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);
