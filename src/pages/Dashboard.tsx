import Filter from '../components/Filter.tsx'
import Card from '../components/Card.tsx'

function Dashboard({ setSearch, setId, data, search }) {
    return (
        <div>
            <Filter setSearch={setSearch} />
            <Card data={data} setId={setId} search={search} />
        </div>
    )
}

export default Dashboard;