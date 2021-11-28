const routes ={
    home :'/',
    login :'/login',
    register :'/register',
    account :'/account',
    bookings :'/bookings',
    booking:(bookingId) => (bookingId ?  `/booking/:${bookingId}`: '/booking/:bookingId'),
    admin:{
        users: '/admin/users'
    }
};

export default routes;