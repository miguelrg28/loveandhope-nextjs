module.exports = {
    async headers() {
        return [
            {
                source: '/api/:path',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value:
                            'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
                    },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,POST,PUT' },
                    { key: 'Allow', value: 'GET,DELETE,POST,PUT' },
                ],
            },
        ]
    },
}
