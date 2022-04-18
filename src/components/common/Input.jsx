
function Input({ name, type, label, value, onChange, error, placeholder }) {

    return (<div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <input
            type={type}
            className="form-control"
            id={name}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder || name}
        />

        {error && <div className="alert alert-danger">{error}</div>}

    </div>);
}

export default Input;