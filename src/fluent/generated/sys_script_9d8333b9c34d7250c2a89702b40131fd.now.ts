import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['9d8333b9c34d7250c2a89702b40131fd'],
    name: 'this is my first business rule',
    table: 'incident',
    when: 'before',
    action: ['update', 'insert'],
    filterCondition: 'active=true^EQ',
    setFieldValue: 'caller_id=62826bf03710200044e0bfc8bcbe5df1^EQ',
})
