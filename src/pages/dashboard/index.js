import React, { useState } from 'react'
import style from './style.module.css'
import background from './background.jpg'
import Button from '../../components/modules/button'
import Add from '../input'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const [selected, setSelected] = useState('')
  let {orders : {orders}} = useSelector(state => state)
  const [modal, setModal] = useState(false)
  return (
    <>
      { modal ? <Add close={() => setModal(!modal)}/> : ""}
      <div className={style.body}>
        <div className={style.background}>
          <img src={background} alt="" />
          <h1 className='fw-bold'>Dashboard</h1>
          <p>List of all order</p>
        </div>
        <div className={style.table}>
          <p>List of All Order</p>
          <div>
            <Button onClick={() => setSelected('whatsapp')}>Whatsapp</Button>
            <Button onClick={() => setSelected('whatsapp')}>Call</Button>
            <Button onClick={() => setSelected('whatsapp')}>Email</Button>
          </div>
          <div>
            <table className='table mt-3'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Sumber Pesanan</th>
                  <th>Email</th>
                  <th>Jumlah Roti</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders?.length > 0 ? (
                    selected ? (
                      orders = orders.filter((data) => data.sumber === selected)
                    ) : 
                    orders.map((data,index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.sumber}</td>
                          <td>{data.email}</td>
                          <td>{data.jumlah}</td>
                          <td>{data.keterangan}</td>
                        </tr>
                      )
                    })
                  ) : <tr className='text-center'>
                    <td colSpan={6}>No order found</td>
                  </tr>
                }
              </tbody>
            </table>
            <Button onClick={() => setModal(!modal)}>Add order</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard