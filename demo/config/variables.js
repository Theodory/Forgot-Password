require('dotenv').config();

module.exports = {

    /**
     * Application Port
     *
     * This value is the port of the Finlink application. This value is used to instruct
     * the HTTP server to direct the incoming traffic to your application.
     */
    PORT: process.env.PORT,


    /**
     * JSON Web Token Secret
     *
     * JWT or JSON Web Token is a JSON-based open standard for creating access
     * tokens that may assert some claims i.e. user authentication and/or
     * authorization. This value stores the secret salt to be used to generate
     * the access tokens.
     */
    JWT_SECRET: process.env.JWT_SECRET,


    /**
     * Default Database Connection
     *
     * This value specifies the database connection to be used by the application
     * for all database work.
     */
    DB_DATABASE: process.env.DB_URL,


    /**
     * Mail Driver
     *
     * Finlink supports both SMTP and Amazon's SES as drivers
     * for sending emails. Below specifies what is being used throughout
     * the application.
     */
    MAIL_DRIVER: process.env.MAIL_DRIVER,


    /**
     * Global "From" Address
     *
     * All emails sent from Finlink are to be sent using the same "From" address.
     * Below specifies the name and address that is used globally for all emails
     * sent throughtout the application.
     */
    MAIL_FROM_NAME: process.env.MAIL_FROM_NAME || 'Finlink',
    MAIL_FROM_ADDRESS: process.env.MAIL_FROM_ADDRESS || 'hello@finlink.co.tz',


    /**
     * E-Mail Encryption Protocol
     *
     * Below specifies the encryption protocol to be used when sending emails
     * throughout the application. A sensible default is using the
     * transport layer security protocol.
     */
    MAIL_ENCRYPTION: process.env.MAIL_ENCRYPTION || 'tls',


    /**
     * E-Mail Encryption Protocol
     *
     * Below specifies the encryption protocol to be used when sending emails
     * throughout the application. A sensible default is using the
     * transport layer security protocol.
     */
    MAIL_USERNAME: process.env.MAIL_USERNAME,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,


    /**
     * Markdown Mail Settings
     *
     * Below specifies theme and components used for rendering emails.
     */
    //TODO

};