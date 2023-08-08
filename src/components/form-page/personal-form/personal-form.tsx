export function PersonalForm() {
  return (
    <form>
      <h2>Ingresa los siguientes datos:</h2>

      <div className="form-control">
        <input
          type="text"
          name="userName"
          id="user-name"
          placeholder="Ingresa tu nombre"
          required
        />

        <input
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Ingresa tu apellido"
          required
        />
      </div>

      <div>
        <label htmlFor="user-birthdate">Fecha de nacimiento</label>
        <input type="date" name="userBirthdate" id="user-birthdate" />
      </div>

      <legend>Selecciona tu género</legend>
      <div>
        <input type="radio" name="gender" id="male" value="M" />
        <label htmlFor="male">Masculino</label>
        <input type="radio" name="gender" id="female" value="F" />
        <label htmlFor="female">Femenino</label>
        <input type="radio" name="gender" id="other" value="O" />
        <label htmlFor="other">Otro</label>
        <input type="radio" name="gender" id="na" value="NA" />
        <label htmlFor="na">Prefiero no decir</label>
      </div>

      <div>
        <input
          type="email"
          name="userEmail"
          id="email"
          placeholder="Ingresa tu correo electrónico"
        />
      </div>

      <div>
        <input type="checkbox" name="wantNewsLetter" id="newsletter" />
        <label htmlFor="newsletter">
          ¿Desea recibir información de nuestra newsletter?
        </label>
      </div>
    </form>
  );
}
