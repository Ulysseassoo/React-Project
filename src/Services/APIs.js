export const login = async ({ email, password }) => {
	let response = await fetch("http://edu.project.etherial.fr/auth", {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({ email: email, password: password })
	})

	let json = await response.json()

	return json
}

export const registerUser = async ({ firstname, lastname, email, password, password_verif }) => {
	let response = await fetch("http://edu.project.etherial.fr/users", {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({ email: email, password: password, firstname: firstname, lastname: lastname, password_verif: password_verif })
	})

	let json = await response.json()

	return json
}

export const getUserInformations = async (token) => {
	let response = await fetch("http://edu.project.etherial.fr/users/me", {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	let json = await response.json()

	return json
}

export const updateUserAccount = async (token, { firstname, lastname, birthdate }) => {
	let response = await fetch("http://edu.project.etherial.fr/users/me", {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({ firstname: firstname, lastname: lastname, birthdate: birthdate })
	})

	let json = await response.json()

	return json
}

export const updateUserPassword = async (token, { password_old, password_new, password_new_verif }) => {
	let response = await fetch("http://edu.project.etherial.fr/users/me/password", {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({ password_old: password_old, password_new: password_new, password_new_verif: password_new_verif })
	})

	let json = await response.json()

	return json
}

export const createArticle = async ({ title, content, article_category_id }, token) => {
	let response = await fetch("http://edu.project.etherial.fr/articles", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({ article_category_id: article_category_id, title: title, content: content })
	})

	let json = await response.json()

	return json
}

export const getAllArticleCategories = async (token) => {
	let response = await fetch("http://edu.project.etherial.fr/articles/categories", {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	let json = await response.json()

	return json
}

export const getAllArticles = async (token, limit = 10, offset = 0) => {
	let response = await fetch(`http://edu.project.etherial.fr/articles?limit=${limit}&offset=${offset}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	let json = await response.json()

	return json
}

export const getArticleById = async (token, article_id) => {
	let response = await fetch(`http://edu.project.etherial.fr/articles/${article_id}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	let json = await response.json()

	return json
}
