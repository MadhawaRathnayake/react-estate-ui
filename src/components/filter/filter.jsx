import './filter.scss'

function Filter() {
    return (
        <div className='filter'>
            <h1>Search Result for <b>Colombo</b></h1>
            <div className='top'>
                <div className='item'>
                    <label htmlFor='city'>Location</label>
                    <input type='text' id='city' name='city' placeholder='City Location' />
                </div>
            </div>
            <div className='bottom'>
                <div className='item'>
                    <label htmlFor='type'>Type</label>
                    <select name='type' id='type'>
                        <option value="any">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className='item'>
                    <label htmlFor='vehicle-type'>Vehicle Type</label>
                    <select name='vehicle-type' id='vehicle-type'>
                        <option value="any">Any</option>
                        <option value="car">Car</option>
                        <option value="van">Van</option>
                        <option value="suv">SUV</option>
                        <option value="lorry">Lorry</option>
                        <option value="pickup">Pickup</option>
                    </select>
                </div>
                <div className='item'>
                    <label htmlFor='minPrice'>Min Price</label>
                    <input type='number' id='minPrice' name='minPrice' placeholder='any' />
                </div>
                <div className='item'>
                    <label htmlFor='maxPrice'>Max Price</label>
                    <input type='number' id='maxPrice' name='maxPrice' placeholder='any' />
                </div>
                <div className='item'>
                    <label htmlFor='madeYear'>Made Year</label>
                    <input type='number' id='madeYear' name='madeYear' placeholder='any' />
                </div>
                <button>
                    <img src='/search.png' />
                </button>
            </div>
        </div>
    )
}

export default Filter