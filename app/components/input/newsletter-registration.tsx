import classes from './newsletter-registration.module.css';
import {useRef} from "react"


function NewsletterRegistration() {
  const emailInput = useRef<HTMLInputElement | null>(null)

  async function registrationHandler(event: any) {
    event.preventDefault();

    try{
     const response = await fetch("api/newsletter", {
        method: "POST",
        body: JSON.stringify({email: emailInput.current!.value}),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json();
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInput}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
