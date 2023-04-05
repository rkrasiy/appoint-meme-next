'use client';
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import styles from '../src/app/styles/Home.module.css'


export default function FormSteps() {

    const { 
      register, 
      handleSubmit,
      formState: { errors, isValid } 
    } = useForm({mode: 'all'});
  
    const onSubmit = data => console.log(data);
  
    /** Input field component */
    const Input = ({label, required, type, placeholder}) => (
      <div>
        <legend>{label}</legend>
        <input 
          {...register(label, { required })} 
          className={errors[label] && styles.inputInvalid}
          type={type} placeholder={placeholder}
        />
        {errors[label] && <span>mandatory</span>}
      </div>
    )
    
    /** Group the person input fields in a component */
    const PersonFields = () =>(
      <section className={styles.inputGroup}>
        <h2 className="text-[var(--color-principal)]">Elegir servicio</h2>
        <label>
          Seleccione un servicio
            <select class="w-full rounded-lg border-gray-300 bg-gray-100 border p-3 text-sm" placeholder="Name" type="text" id="name">
                <option>Corte y barba</option>
                  <option>Corte caballero</option>
                  <option>Arreglo barba</option>
                  <option>Corte de niño</option>
                  <option>Corte bebe</option>
              
            </select>
                </label>
   
        <Input label="Birthday" required type="date" placeholder="dd/mm/aaa"/>
      </section>
    )
  
    /** Group the contact input fields in a component */
    const ContactFields = () => (
      <section className={styles.inputGroup}>
        <h3>Contact</h3>
        <Input label="Email" required type="email" placeholder="exemple@exemple.com"/>
        <Input label="Phone" required type="tel" placeholder="(00) 0.0000-0000"/>
      </section>
    )
  
    /** Group the address input fields in a component */
    const AddressFields = () =>(
      <section className={styles.inputGroup}>
        <h3>Address</h3>
        <Input  label="Street" required type="text" placeholder="Street name, avenue, etc..."/>
        <Input label="Number" required type="number" placeholder="000"/>
      </section>
    )
  

    const Navigation = () =>(
      <section className={styles.navigationControls}>
        {
          step === fieldGroups.length-1 && 
          <button type="submit" className={styles.submitButton} disabled={!isValid}>
            SAVE
          </button>
        }
        {
          step < fieldGroups.length-1 &&
          <button type="button" className={styles.nextButton} disabled={!isValid} onClick={()=>{setStep(step+1)}}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
            NEXT
          </button>
        }
        {
          step > 0 &&
        <button type="button" className={styles.backButton} onClick={()=>{setStep(step-1)}}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

          BACK
        </button>
        }
      </section>
    )
  
    /** Mark the input group already filled as blue or gray if not */
    const Reference = () =>(
      <footer className={styles.reference}>
        {renderMarkers()}
      </footer>
    )
    function renderMarkers(){
      let markers = []
      for(let i=0; i<fieldGroups.length; i++)
        markers.push(<span className={step >= i ? styles.markerBlue : styles.markerGray} />)
      return markers
    }
  
    const [step, setStep] = useState(0)
  
    const fieldGroups =[
      <PersonFields/>,
      <ContactFields/>,
      <AddressFields/>
    ]
  
    return (
      <div>
 
  
        <main className={styles.mainContainer}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {fieldGroups[step]}
            <Navigation/>
            <Reference/>
          </form>
        </main>
        
      </div>
    )
  }