module.exports = class Response {
    /**
     * @constructs Response
     * @param {number} code status code
     * @param {string} msg error message
     */
    constructor(code, msg) {
        this.code = code
        this.message = msg
    }

    //2xx

    static get ok() {
        return new Response(200, 'ok')
    }
    static get created() {
        return new Response(201, 'Created')
    }
    static get accepted() {
        return new Response(202, 'Accepted')
    }
    static get nocontent() {
        return new Response(204)
    }
    static get contentdifferent() {
        return new Response(210, 'Content Different')
    }

    //4xx

    static get badrequest() {
        return new Response(400, 'Bad request')
    }
    static get unauthorized() {
        return new Response(401, 'Unauthorized')
    }
    static get forbidden() {
        return new Response(403, 'Forbidden')
    }
    static get notfound() {
        return new Response(404, 'Not found')
    }
    static get methodnotallowed() {
        return new Response(405, 'Method Not Allowed')
    }


    //5xx

    static get error() {
        return new Response(500, 'Internal server error')
    }
    static get unavailable() {
        return new Response(503, 'Service Unavailable')
    }
    static get timeout() {
        return new Response(504, 'Time-out')
    }

}