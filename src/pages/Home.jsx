import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Select from 'react-select'

const options = [
    { value: 'people', label: 'People' },
    { value: 'planets', label: 'Planets' },
    { value: 'films', label: 'Films' },
    { value: 'species', label: 'Species' },
    { value: 'vehicles', label: 'Vehicles' },
    { value: 'starships', label: 'starships' },
]

export const Home = () => {
    const [select, setSelect] = useState('')
    const [idInput, setIdInput] = useState(1)
    const navigate = useNavigate()


    const handleSearch = () => {
        navigate(`/${select}/${idInput}`);
    }
    const onSelectChange = (e) => {
        setSelect(e.value)
    }

    const handleInputChange = ({ target }) => {
        setIdInput(target.value)
    }

    return (
        <>
            <form>
                <label htmlFor="select-search">Search for:</label>
                <Select options={options} onChange={onSelectChange} styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        background: '#253858',
                        width:'500px',
                    })
                }}


                    theme={(theme) => ({
                        ...theme,
                        borderRadius: '10px',
                        colors: {
                            ...theme.colors,
                            primary25: '#3d547b',
                            neutral80: 'white',
                        },
                    })}
                />
                <label htmlFor="searchId">Id</label>
                <input type="number" onChange={handleInputChange} className='input'/>
            <button onClick={handleSearch}>Search</button>
            </form>

            <Outlet />
        </>
    )
}
