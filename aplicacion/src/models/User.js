class User{
	constructor(
		primer,
		ultimo,
		tipo,
		doc,
		provincia,
		calle,
		numero,
		puerta,
		localidad,
		codigopostal,
		sub,
		domain,
		country,
		area,
		number
		){
		this.nombres={primer,ultimo}
		this.documento={tipo,numero:doc}
		this.email={sub:sub,at:"@",domain:domain}
		this.phone={country,area,number}
		this.domicilio={
			provincia:provincia,
			calle:calle,
			numero:numero,
			puerta:puerta,
			localidad:localidad,
			codigopostal:codigopostal
		}
		//this.email={sub:sub,at:'@',domain:domain},
		//this.phone={country,area,number}
	}
}
const gabriel={
	nombres: {
		primer: 'gabriel',
		ultimo: 'badenas'
	},
	documento:{
		tipo:'dni',
		numero:'12345678'
	},
	domicilio:{
		provincia:'caba',
		calle:'rivadavia',
		numero:1,
		puerta:'pb',
		localidad:'comuna 11',
		codigopostal:'1416'
	},
	email: {
		sub: 'gabrielsbadenas',
		at: '@',
		domain: 'gmail.com'
	},
	phone: {
		country: {
			name: 'ar',
			code: '+54'
		},
		area: {
			number: 11
		},
		number:12345678
	}
}
	const fer = new User(
		'wiki',
		'sanchez',
		'dni',
		88888888,
		'buenos aires',
		'25 de mayo',
		420,'1b','tigre'
		,1234,'wiki-san'
		,'wiki.com','54','11'
		,'12341234'
		)

const users=[
	fer,gabriel
]
export default {users}
//todo: hacerlo pero con class y Usernstructor