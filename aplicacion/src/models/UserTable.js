export default class UserTable {
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
    ) {
        this.user = {
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
        }
    }
}