export default function CheckCuadrant(x,y){
let northSouth
	if(y>0){
		northSouth = 'north'
	}else{
		northSouth = 'south'
	}
	let westEast
	if(x>0){
		westEast = 'east'
	}else{
		westEast = 'west'
	}
	const cuadrant = northSouth+westEast
	alert(northSouth+westEast)
	console.log(northSouth,westEast)
	return {northSouth,westEast}
}
