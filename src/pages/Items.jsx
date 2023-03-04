import { Link } from 'react-router-dom'
import '../styles/Items/items.css'

export default function Items({data}) {
  return (
    <Link to={`/selectedpaige/${data.id}`} className='mainBox'>
        <img src={data.img} className='dataimg' alt='travel website store' />
        <center><p className='description'>Title: {data.title}</p></center>
        <center><p className='description price'>Price:{data.price} $</p></center>
    </Link>
  )
}
