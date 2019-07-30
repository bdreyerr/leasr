//listen for auth status changes
auth.onAuthStateChanged(user => {
    console.log(user);
    if(user)
    {
        
    }
})


//signup
const singupForm = document.querySelector('#signup-form');

if(singupForm)
{
    singupForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        //user input
        const email = singupForm['signup-email'].value;
        const password = singupForm['signup-password'].value;
    
        

        //signup the user in firebase
        auth.createUserWithEmailAndPassword(email, password).then(cred =>{
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close(); //this will change if you switch out materialize MEETCH
            //^ it just closes the signup modal
            singupForm.reset();
        });
    })
}

const signOutForm = document.querySelector('#logout');
signOutForm.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {

        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close(); //this will change if you switch out materialize MEETCH
        //^ it just closes the signup modal
        loginForm.reset();
    });
});
