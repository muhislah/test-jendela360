import React from 'react'

const Input = () => {
  return (
    <>
      <div>
        <h2>Add Order</h2>
        <div>
          <form>
            <div>
              <label htmlFor="sumber">Sumber Pesanan</label>
              <select name="sumber" id="sumber">
                <option value="whatsapp">Whatsapp</option>
                <option value="call">Call</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div>
              <label htmlFor="name">Nama : </label>
              <Input id="name" name="name" />
            </div>
            <div>
              <label htmlFor="phone">Nomor Hp : </label>
              <Input id="phone" type="tel" name="phone" />
            </div>
            <div>
              <label htmlFor="jumlah">Jumlah Roti : </label>
              <Input id="jumlah" type="number" name="jumlah" />
            </div>
            <div>
              <label htmlFor="keterangan">Keterangan : </label>
              <textarea name="keterangan" id="keterangan" cols="30" rows="10">
                
              </textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Input