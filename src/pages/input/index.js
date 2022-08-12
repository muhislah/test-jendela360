import React, { useState } from 'react'
import Input from '../../components/modules/input'
import style from './style.module.css'
import closebutton from './close.png'
import Button from '../../components/modules/button'
import { useDispatch } from 'react-redux'
import { addOrder } from '../../configs/redux/actions/orderAction'

const Add = ({close}) => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    sumber : 'whatsapp',
  })
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addOrder(data, close))
  }
  return (
    <>
      <div className={style.body}>
        <div className={style.container}>
          <div className={style.close} onClick={close}>
            <img src={closebutton} alt="" />
          </div>
          <h2>Add Order</h2>
          <p>Fill that area to add order</p>
          <hr />
          <div>
            <form>
              <div className={style.tinyinput}>
                <label htmlFor="sumber">Sumber Pesanan</label>
                <select name="sumber" id="sumber" onChange={(e) => handleChange(e)}>
                  <option value="whatsapp">Whatsapp</option>
                  <option value="call">Call</option>
                  <option value="email">Email</option>
                </select>
              </div>
              <div className={style.tinyinput}>
                <label htmlFor="name">Nama : </label>
                <Input id="name" name="name" onChange={(e) => handleChange(e)}/>
              </div>
              <div className={style.tinyinput}>
                <label htmlFor="phone">Nomor Hp : </label>
                <Input id="phone" type="tel" name="phone" onChange={(e) => handleChange(e)}/>
              </div>
              <div className={style.tinyinput}>
                <label htmlFor="jumlah">Jumlah Roti : </label>
                <Input id="jumlah" type="number" name="jumlah" onChange={(e) => handleChange(e)}/>
              </div>
              <div className={style.tinyinput}>
                <label htmlFor="keterangan">Keterangan : </label>
                <textarea name="keterangan" id="keterangan" cols="30" rows="5" onChange={(e) => handleChange(e)}>
                </textarea>
              </div>
              <hr />
              <Button onClick={(e) => handleSubmit(e)}>Add</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Add