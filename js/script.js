
const texts = [
	'И понял одну важную вещь…',
	'Ты мне очень дорога и я ценю каждое мгновение с тобой✨',
	'Когда я общаюсь с тобой — мир становится лучше 😊',
	'Я благодарен тебе за все то что ты делаешь для меня',
	'Я хочу прожить всю оставшуюся жизнь именно с тобой❤️',
	'Я очень сильно люблю и ценю тебя❤️',
	'Будешь моей девушкой? 💖💖💖💖💖💖💖',
]

let index = 0
const btn = document.getElementById('btn')
const text = document.getElementById('text')
const music = document.getElementById('music')

// fullscreen on first interaction (mobile-friendly)
function requestFull() {
	const el = document.documentElement
	if (el.requestFullscreen) el.requestFullscreen()
}

btn.addEventListener('click', () => {
	requestFull()
	if (music.paused) music.play()

	if (index < texts.length) {
		text.style.opacity = 0
		setTimeout(() => {
			text.textContent = texts[index]
			text.style.opacity = 1
		}, 200)

		createHeart()
		createSpark()
		index++
		if (index === texts.length) showChoice()
	}
})

function showChoice() {
	document.body.classList.add('dark')
	const wrap = document.getElementById('mainBtnWrap')
	wrap.innerHTML = `
        <button id="yes">❤️ Да</button>
        <button class="no" id="no">Нет</button>
      `

	const yes = document.getElementById('yes')
	const no = document.getElementById('no')

	yes.addEventListener('click', () => {
		text.textContent = 'Я самый счастливый человек на планете💞'
		wrap.innerHTML = '<button disabled>💖</button>'
		for (let i = 0; i < 25; i++) createHeart()
	})

	const move = () => moveNo(no)
	no.addEventListener('mouseover', move)
	no.addEventListener('click', move)
}

function moveNo(el) {
	el.style.left = Math.random() * (window.innerWidth - 120) + 'px'
	el.style.top = Math.random() * (window.innerHeight - 60) + 'px'
}

function createHeart() {
	const heart = document.createElement('div')
	heart.className = 'heart'
	heart.textContent = '❤️'
	heart.style.left = Math.random() * window.innerWidth + 'px'
	heart.style.bottom = '-20px'
	document.body.appendChild(heart)
	setTimeout(() => heart.remove(), 3000)
}

function createSpark() {
	const s = document.createElement('div')
	s.className = 'sparkle'
	s.textContent = '✨'
	s.style.left = Math.random() * window.innerWidth + 'px'
	s.style.top = Math.random() * window.innerHeight + 'px'
	document.body.appendChild(s)
	setTimeout(() => s.remove(), 1200)
}
function moveNo(el) {
	const card = document.querySelector('.card')

	const cardRect = card.getBoundingClientRect()
	const btnRect = el.getBoundingClientRect()

	const maxX = cardRect.width - btnRect.width
	const maxY = cardRect.height - btnRect.height

	const x = Math.random() * maxX
	const y = Math.random() * maxY

	el.style.left = x + 'px'
	el.style.top = y + 'px'
}