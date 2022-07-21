import React, {useState, useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  // const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [cryptos, setCryptos] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    // setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((coin) => (
      coin.name.toLowerCase().includes(searchItem.toLowerCase())
    ))

    setCryptos(filteredData);

  }, [cryptosList, searchItem]);

  console.log(cryptos);

  if (isFetching) return 'loading...'

  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input placeholder='Search Cryptocurrency' onChange={e => setSearchItem(e.target.value)} />
        </div>
      )}

      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card 
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Price: {millify(currency.marketCap)}</p>
                <p>Price: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies