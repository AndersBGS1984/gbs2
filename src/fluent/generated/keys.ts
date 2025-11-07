import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '0aa3fe026723438194a711c6e218e70b'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c80f4d3803af479d907720a31915e775'
                    }
                }
                composite: [
                    {
                        table: 'sys_user_role'
                        id: '092f6b31c34d7250c2a89702b401315f'
                        key: {
                            name: 'x_431699_gbs2.admin'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '0d2f6b31c34d7250c2a89702b4013166'
                        key: {
                            name: 'x_431699_gbs2.user'
                        }
                    },
                ]
            }
        }
    }
}
