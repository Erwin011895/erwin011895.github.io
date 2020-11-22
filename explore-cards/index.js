let rightCard = document.getElementById('right-card');
let middleCard = document.getElementById('middle-card');
let middleCardTitle = document.getElementById('middle-card-title');
let middleCardQuestion = document.getElementById('middle-card-question');

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(questions);
console.log(questions);

rightCard.onclick = function () {
	let newIndex = (parseInt(middleCardTitle.innerText.slice(1)) + 1) % questions.length;
	let newQuestion = questions[newIndex].question;
	console.log(newIndex, newQuestion);

	let tl = anime.timeline({
	  easing: 'easeOutExpo',
	});

	tl.add({
		duration: 0,
		targets: middleCard,
		rotateY: 0,
	})
	.add({
	  duration: 500,
	  targets: middleCard,
	  rotateY: 180,
	  opacity: 0,
	})
	.add({
	  duration: 0,
	  targets: middleCardTitle,
	  innerText: "#" + newIndex,
	})
	.add({
	  duration: 1,
	  targets: middleCardQuestion,
	  // update: function (anim) {
	  // 	middleCardQuestion.innerText = newQuestion;
	  // },
	  begin: function(anim) {
	    middleCardQuestion.innerText = newQuestion;
	  },

	})
	.add({
	  duration: 500,
	  targets: middleCard,
	  opacity: 1,
	  rotateY: 360,
	})
	// .add({
	//   targets: middleCard,
	//   rotateY: 360,
	//   duration: 500,
	// });
}