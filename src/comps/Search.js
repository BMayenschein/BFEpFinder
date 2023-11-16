import Button from './Button'

const Search = ({onClick, classText, text, setSearchTerm, searchTerm}) => {
    return (
        <form className="py-6 flex justify-center">
            <input 
            id="search"
            type="text" 
            placeholder="Search..." 
            className="input input-bordered w-full max-w-xs"
            name="search" 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            minLength="4">

        </input>
        <Button onClick={onClick} classText={classText} text={text}/>
    </form>
    )
}

export default Search