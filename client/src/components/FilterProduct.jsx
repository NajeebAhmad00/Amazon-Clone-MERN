import { useState } from 'react'
import { useNavigate } from 'react-router'
import {
    FilterHead,
    Filters,
    Filter,
    Label
} from '../styles/ProductList'
import { filters } from '../data'
import { Message } from '../styles/Global'

const FilterProduct = () => {
    const navigate = useNavigate()

    const [category, setCategory] = useState('')

    const handleCat = async (e) => {
        const { value } = e.target
        await setCategory(value)
        navigate(`/products?cat=${category}`)
        console.log(category)
    }
    return (
        <>
            <FilterHead>Department</FilterHead>
            {filters.department.map((filter, i) => (
                <Filters onChange={handleCat} key={i}>
                    <Filter
                        type='checkbox'
                        value={filter}
                    /> <Label>
                        {filter.charAt(0).toUpperCase() + filter.substring(1)}
                    </Label>
                </Filters>
            ))}

            <Message>Filter feature works but is a little bit buggy</Message>
            <Message>Try clicking multiple times to filter items</Message>

            {/* ******************************************************************** */}
            {/* Saved for later */}
            {/* ************************************************************************** */}
            {/* <FilterHead>Price</FilterHead> */}
            {/* {filters.price.map((filter, i) => (
                <Filters key={i}>
                    <Filter type='checkbox' value={filter.split('$')[1]} /> <Label>
                        {filter.charAt(0).toUpperCase() + filter.substring(1)}
                    </Label>
                </Filters>
            ))} */}
        </>
    )
}

export default FilterProduct