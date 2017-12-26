const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 8989})
const users = []

const broadcast = (data, ws) => {
  console.log(ws)
  wss.clients.forEach(client => {
    if (client.readyState == WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })

}

wss.on('connection', (ws) => {
  let index
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    console.log(data)
    switch (data.type) {
      case 'ADD_USER':
      index = users.length
      users.push({username: data.username, id: index + 1})
      ws.send(JSON.stringify({
        type: 'USER_LIST',
        users,
      }))
      broadcast({
        type: 'USER_LIST',
        users
      }, ws)
      break

      case 'ADD_MESSAGE':
      broadcast({
        type: 'MESSAGE_RECEIVED',
        message: data.message,
        author: data.author
      }, ws)
      break

      case 'USERS_LIST':
        broadcast({
          type: 'USERS_LIST',
          users
        })
    }
  })

  ws.on('close', () => {
    users.splice(index, 1),
    broadcast({
      type: 'USER_LIST',
      users
    }, )
  })
})

