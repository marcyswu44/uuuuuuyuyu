
const products_container = document.querySelector('.products-container');
const random_user_add_button = document.querySelector('.random-user-add-button');
const search_input = document.querySelector('.search-input');

const random_users = [];

search_input.addEventListener('input', searchUser);

function searchUser(event) {
	event.preventDefault();

	const searched_random_users = random_users.filter((user) => user.email.includes(event.target.value));

	products_container.innerHTML = '';

	searched_random_users.forEach((random_user) => {
		products_container.innerHTML += `
				<div class="card col-4">
					<h3 class="card-text">${random_user.userId}</h3>
					<h5 class="card-text">${random_user.id}</h5>
					<h5 class="card-text">${random_user.title}</h5>
				</div>
			`;
	});
}

random_user_add_button.addEventListener('click', addRandomUser);

function addRandomUser(event) {
	event.preventDefault();

	fetch('https://jsonplaceholder.typicode.com/albums') 
	
	.then((response) => response.json())
		.then((user) => {
			random_users.push(user);

			products_container.innerHTML += `
				<div class="card col-4">
					<h3 class="card-text">${user.userId}</h3>
					<h5 class="card-text">${user.id}</h5>
					<h5 class="card-text">${user.title}</h5>

				</div>
			`;
		});
}