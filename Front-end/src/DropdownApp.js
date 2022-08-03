import Dropdown from 'react-bootstrap/Dropdown';

function DropdownApp() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Encrypt
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Base64</Dropdown.Item>
        <Dropdown.Item href="#/action-2">RSA</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fernet</Dropdown.Item>
        <Dropdown.Item href="#/action-4">SHA</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownApp;