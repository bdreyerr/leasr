//signup
const singupForm = document.querySelector('#signup-form');

if(singupForm)
{
    singupForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        //user input
        const email = singupForm['signup-email'].value;
        const password = singupForm['signup-password'].value;
    
        console.log(email, password);

        //signup the user in firebase
        auth.createUserWithEmailAndPassword(email, password).then(cred =>{
            console.log(cred);
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close(); //this will change if you switch out materialize MEETCH
            //^ it just closes the signup modal
            singupForm.reset();
        });
    })
}
