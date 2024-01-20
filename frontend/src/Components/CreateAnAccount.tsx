import "./CreateAnAccount.css"

const CreateAnAccount = () => {
  return (
    <div className="box">
      <h2>Create your account</h2>
      <br></br>
      <form>
        <div>
          <label className="form-label text-dark">Email:</label>
          <input type="email" className="form-control" name="email" placeholder="Your email" required></input>
        </div>
        <br></br>
        <div>
          <label className="form-label text-dark">Password:</label>
          <input type="password" className="form-control" name="password" placeholder="Your password" required></input>
        </div>
        <br></br>
        <div>
          <label className="form-label text-dark">Repet your password:</label>
          <input type="password" className="form-control" name="password" placeholder="Your password" required></input>
        </div>
        <br></br>
        <button type="submit" className="botao1">Create your account</button>
      </form>
    </div>
  );
};

export default CreateAnAccount;