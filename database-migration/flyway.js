module.exports = function() {
    return {
        flywayArgs: {
            url: 'jdbc:postgresql://localhost/clientes',
            schemas: 'public',
            locations: 'filesystem:scripts',
            user: 'clientes',
            password: 'clientes',
            sqlMigrationSuffixes: '.sql',
            baselineOnMigrate: true,
        },
    };
};
