import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['fe20bfb1c34d7250c2a89702b40131e7'],
    type: 'onCellEdit',
    table: 'incident',
    isolateScript: true,
    script: `function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
  var saveAndClose = true;
 //Type appropriate comment here, and begin script below
 
 callback(saveAndClose); 
}`,
    name: '1st fluent client script',
    description: 'This is my initial client script',
    field: 'caller_id',
})
