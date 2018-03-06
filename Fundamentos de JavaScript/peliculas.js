		
		const starWars7= 'Star Wars: El despertar de la fuerza'
		const pgStarWars7= 13

		const nameAlberto= 'Alberto'
		const ageAlberto = 30

		const nameSanti = 'Santi'
		const ageSanti = 12

		function canWatchStarWars7 (name, age, isWithAdult = false){
			if(age >= pgStarWars7) {
			alert( `${name} puede pasar a ver ${starWars7}`)
		}else if(isWithAdult){
			alert(`${name} puede pasar a ver ${starWars7}. aunque su edad sea ${age}, se encuentra acompañado por un adulto`)

	} else {
		alert( `${name} no puede pasar Tiene ${age} y necesita tener ${pgStarWars7}`)
		}
	}

	canWatchStarWars7(nameAlberto,ageAlberto)
	canWatchStarWars7(nameSanti,ageSanti, true)

	


