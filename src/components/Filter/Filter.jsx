export default function Filter({ onFilter }) {
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    onFilter({ [name]: value });
  };

  return (
    <label>
      Find contact by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Find contact by name."
        required
        onChange={handleChange}
      />
    </label>
  );
}
