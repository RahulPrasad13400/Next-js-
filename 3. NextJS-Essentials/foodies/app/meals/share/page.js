"use client";
import ImagePicker from '@/app/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/action';
import MealFormSubmit from '../meal-form-submit';
import { useFormState } from 'react-dom';
// import { useFormStatus } from 'react-dom';

export default function ShareMealPage() {

  // async function shareMeal(formData) {
  //   // by using use server it only excecutes on the backend 
  //   'use server';
  //  don't mix client and server component on the same file 

  //   const meal = {
  //     title: formData.get('title'),
  //     summary: formData.get('summary'),
  //     instructions: formData.get('instructions'),
  //     image: formData.get('image'),
  //     creator: formData.get('name'),
  //     creator_email: formData.get('email')
  //   }

  // }

  // const status = useFormStatus()
  const [state, formAction] = useFormState(shareMeal, {message : null})
 
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {/* we are on the backend so we use action instead of onSubmit for more convenience */}
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealFormSubmit />
          </p>
        </form> 
      </main>
    </>
  );
}