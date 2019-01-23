import Event from './event';

Echo.join('chat')
.here(users => {
    console.log('here');
   Event.$emit('users.here', users);
})
.joining(user => {
    console.log('joingin');
    Event.$emit('users.joined', user);
})
.leaving(user => {
    Event.$emit('users.left', user);
})
.listen('MessageCreated', (data) => {
    Event.$emit('added_message', data.message);
})