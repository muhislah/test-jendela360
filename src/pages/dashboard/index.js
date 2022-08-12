import React, { useState } from 'react'
import style from './style.module.css'
import background from './background.jpg'
import Button from '../../components/modules/button'
import Add from '../input'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const [selected, setSelected] = useState(null)
  let {orders : {orders}} = useSelector(state => state)
  const [modal, setModal] = useState(false)
  return (
    <>
      { modal ? <Add close={() => setModal(!modal)}/> : ""}
      <div className={style.body}>
        <div className={style.background}>
          <img src={background} alt="" />
          <h1 className='fw-bold'>Dashboard</h1>
        </div>
        <div className={style.table}>
          <p>List of All Order</p>
          <div>
            <Button onClick={() => setSelected('whatsapp')}>Whatsapp</Button>
            <Button onClick={() => setSelected('call')}>Call</Button>
            <Button onClick={() => setSelected('email')}>Email</Button>
            <Button onClick={() => setSelected(null)}>Show All</Button>
          </div>
          <div>
            <table className='table mt-3'>
              <thead>
                <tr className=''>
                  <th className='col-1'>No</th>
                  <th className='col-3'>Nama</th>
                  <th className='col-2'>Sumber Pesanan</th>
                  <th className='col-2'>Email</th>
                  <th className='col-1'>Qty</th>
                  <th className='col-3'>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders?.length > 0 ? (
                    orders.filter((data) => {
                      if ( selected !== null){
                        return data.sumber === selected
                      }else {
                        return data
                      }
                    }).map((data,index) => {
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