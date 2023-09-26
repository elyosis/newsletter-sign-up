const Input = () => {
  return (
    <>
      <label for="email">Email address</label>

      <input
        type="email"
        id="email"
        pattern=".+@globex\.com"
        placeholder="email@company.com"
        required
      />
    </>
  );
};

export default Input;