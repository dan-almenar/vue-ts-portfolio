const forbidden: Error = new Error();
forbidden.name = '403: Forbidden'
forbidden.message = "It seems you don't belong here..."

const badGateway: Error = new Error();
badGateway.name = '502: Bad Gateway';
badGateway.message = 'Failed to connect to the server. Please try again.';

const errors = {
    forbidden: forbidden,
    badGateway: badGateway,
}
export { errors }
