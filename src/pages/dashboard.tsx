import Filter from '../components/Filter.tsx'
import Card from '../components/Card.tsx'

function dashboard({ setSearch, data, search }) {
    return (
        <div>
            <Filter setSearch={setSearch} />
            <Card data={data} search={search} />
        </div>
    )
}

export default dashboard