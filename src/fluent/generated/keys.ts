import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '9d8333b9c34d7250c2a89702b40131fd': {
                        table: 'sys_script'
                        id: '9d8333b9c34d7250c2a89702b40131fd'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '0aa3fe026723438194a711c6e218e70b'
                    }
                    fe20bfb1c34d7250c2a89702b40131e7: {
                        table: 'sys_script_client'
                        id: 'fe20bfb1c34d7250c2a89702b40131e7'
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
