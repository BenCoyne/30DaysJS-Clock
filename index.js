const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".minute-hand");

const setDate = () => {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
};

setInterval(setDate, 1000);
