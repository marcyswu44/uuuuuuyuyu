// // const products_container = document.querySelector('.products-container');
// // const random_user_add_button = document.querySelector('.random-user-add-button');
// // const search_input = document.querySelector('.search-input');

// // const random_users = [];

// // search_input.addEventListener('input', searchUser);

// // function searchUser(event) {
// // 	event.preventDefault();

// // 	const searched_random_users = random_users.filter((user) => user.email.includes(event.target.value));

// // 	products_container.innerHTML = '';

// // 	searched_random_users.forEach((random_user) => {
// // 		products_container.innerHTML += `
// // 				<div class="card col-4">
// // 					<h3 class="card-text"> ${random_user.userid}</h3>
// // 					<h5 class="card-text"> ${random_user.id}</h5>
// // 					<h5 class="card-text"> ${random_user.title}</h5>
			
// // 				</div>
// // 			`;
// // 	});
// // }



// // random_user_add_button.addEventListener('click', addRandomUser);


// // function addRandomUser(event) {
// // 	event.preventDefault();

// // 	fetch('https://jsonplaceholder.typicode.com/albums')
// // 		.then((response) => response.json())
// // 		.then((user) => {
// // 			random_users.push(user);

// // 			products_container.innerHTML += `
// // 				<div class="card col-4">
// // 				<h3 class="card-text">Albums</h3>
// // 					<h5 class="card-text">UserId: ${user.userid}</h5>
// // 					<h5 class="card-text">Id: ${user.id}</h5>
// // 					<h5 class="card-text">Title: ${user.title}</h5>

// // 				</div>
// // 			`;
// // 		});
// // }


// const products_container = document.querySelector('.products-container');
// const random_user_add_button = document.querySelector('.random-user-add-button');
// const search_input = document.querySelector('.search-input');

// const random_users = [];

// search_input.addEventListener('input', searchUser);

// function searchUser(event) {
// 	event.preventDefault();

// 	const searched_random_users = random_users.filter((user) => user.email.includes(event.target.value));

// 	products_container.innerHTML = '';

// 	searched_random_users.forEach((random_user) => {
// 		products_container.innerHTML += `
// 				<div class="card col-4">
// 					<h3 class="card-text">${random_user.email}</h3>
// 					<h5 class="card-text">${random_user.credit_card.cc_number}</h5>
// 					<h5 class="card-text">${random_user.employment.key_skill}</h5>
// 					<img src="${random_user.avatar}" />
// 				</div>
// 			`;
// 	});
// }

// random_user_add_button.addEventListener('click', addRandomUser);

// function addRandomUser(event) {
// 	event.preventDefault();

// 	fetch('https://jsonplaceholder.typicode.com/albums')
// 		.then((response) => response.json())
// 		.then((user) => {
// 			random_users.push(user);

// 			products_container.innerHTML += `
// 				<div class="card col-4">
// 					<h3 class="card-text">${user.userId}</h3>
// 					<h5 class="card-text">${user.id}</h5>
// 					<h5 class="card-text">${user.title}</h5>
// 					<img src="${user.avatar}" />
// 				</div>
// 			`;
// 		});
// }


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
					<h3 class="card-text">${random_user.name}</h3>
					<h5 class="card-text">${random_user.username}</h5>
					<h5 class="card-text">${random_user.email}</h5>
					<h5 class="card-text">${random_user.phone}</h5>
				</div>
			`;
	});
}

random_user_add_button.addEventListener('click', addRandomUser);

function addRandomUser(event) {
	event.preventDefault();

	fetch('https://jsonplaceholder.typicode.com/users') 
	
	.then((response) => response.json())
		.then((user) => {
            console.log(user);
			random_users.push(user);

			products_container.innerHTML += `
				<div class="card col-4">
					<h3 class="card-text">${user.name}</h3>
					<h5 class="card-text">${user.username}</h5>
					<h5 class="card-text">${user.email}</h5>
					<h5 class="card-text">${user.phone}</h5>
				</div>
			`;
		});
}