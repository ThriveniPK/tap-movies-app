import Button from "@restart/ui/esm/Button"
import { Form } from "react-bootstrap"

function SearchBar() {
    return (
        <div className="d-flex justify-content-between ">
        <Form.Control type="text" placeholder="Search for movies.." />
        <Button variant="primary">Search</Button>
        </div>
    )
}

export default SearchBar