const routes ={
    home :'/',
    login :'/login',
    register :'/register',
    account :'/account',
    bookings :'/bookings',
    booking :'/booking',
    users: '/users',
    //editBooking:(id) => (id?  `/editBooking/:${id}`: '/editBooking/:id'),
    admin:{
        users: '/admin/users'
    }
};

export default routes;