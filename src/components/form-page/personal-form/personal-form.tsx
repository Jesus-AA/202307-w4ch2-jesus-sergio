import { SyntheticEvent, useState } from 'react';

type PersonalData = {
  userName: string;
  lastName: string;
  userBirthdate: string;
  gender: string;
  userEmail: string;
  wantNewsLetter: boolean;
};

export function PersonalForm() {
  const initialState: PersonalData = {
    userName: '',
    lastName: '',
    userBirthdate: '',
    gender: '',
    userEmail: '',
    wantNewsLetter: false,
  };

  const [userPersonalData, setUserPersonalData] =
    useState<PersonalData>(initialState);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log('Enviando', userPersonalData);
  };

  const handleChange = (ev: SyntheticEvent) => {
    const formControl = ev.target as HTMLFormElement;
    setUserPersonalData({
      ...userPersonalData,
      [formControl.name]:
        formControl.type === 'checkbox'
          ? formControl.checked
          : formControl.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ingresa los siguientes datos:</h2>

      <div className="form-control">
        <input
          type="text"
          name="userName"
          id="user-name"
          placeholder="Ingresa tu nombre"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Ingresa tu apellido"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="user-birthdate">Fecha de nacimiento</label>
        <input
          type="date"
          name="userBirthdate"
          id="user-birthdate"
          required
          onChange={handleChange}
        />
      </div>

      <legend>Selecciona tu género</legend>
      <fieldset className="gender" onChange={handleChange}>
        <input type="radio" name="gender" id="male" value="M" />
        <label htmlFor="male">Masculino</label>
        <input type="radio" name="gender" id="female" value="F" />
        <label htmlFor="female">Femenino</label>
        <input type="radio" name="gender" id="other" value="O" />
        <label htmlFor="other">Otro</label>
        <input type="radio" name="gender" id="na" value="NA" />
        <label htmlFor="na">Prefiero no decir</label>
      </fieldset>

      <div>
        <input
          type="email"
          name="userEmail"
          id="email"
          placeholder="Ingresa tu correo electrónico"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="checkbox"
          name="wantNewsLetter"
          id="newsletter"
          onChange={handleChange}
        />
        <label htmlFor="newsletter">
          ¿Desea recibir información de nuestra newsletter?
        </label>
      </div>
      <button type="submit">Aceptar</button>
    </form>
  );
}
