export default {
    port: parseInt(process.env.PORT as string, 10) || 9000,
    secret: process.env.SECRET || 'please specify a secret key.'
}
