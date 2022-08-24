class Coordinate {
    constructor(x0, y1, x2, y3) {
        this.x0 = x0
        this.y1 = y1
        this.x2 = x2
        this.y3 = y3
    }
}
const jsonSquare={
	x0:34,
	y1:58,
	x2:33,
	y3:59
}
const barrio = new Coordinate(-34,-58,-35,-59)
export default function compareCoordinates
(userLocation, coverageZone) {

    const a = userLocation
    const b = coverageZone
    const c = (
        (
            (a.x0 < b.x0 < a.x2)
            ||
            (a.x0 < b.x2 < a.x2))
        &&
        ((
            a.y1 < b.y1 < a.y3
        )
            ||
            (
                a.y1 < b.y3 < a.y3
            ))
    )
}
