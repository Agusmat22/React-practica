import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });


  return (
    <div>

        <h1>Simple form</h1>
        <hr />

        <input 
            type="username"
            className='form-control mt-2'
            name='username'
            placeholder='Username'
            value={username}
            onChange={onInputChange}
            
        />

        <input 
            type="email"
            className='form-control mt-2'
            name='email'
            placeholder='agustin@gmail.com'
            value={email}
            onChange={onInputChange}
            
        />

        <input 
            type="password"
            className='form-control mt-2'
            name='password'
            placeholder='pass'
            value={password}
            onChange={onInputChange}
            
        />

        <button className="btn btn-primary mt-3" onClick={onResetForm}>Reset</button>
    </div>
  )
}
