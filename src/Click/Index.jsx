import React, { useEffect, useRef, useState } from 'react'

function Index() {
  const [data, setdata] = useState([])
  const [user, setUser] = useState({ transaction_param: "", return_url: "", card_type: "", amount: "" })

  const url = `https://my.click.uz/services/pay?service_id={service_id}&merchant_id={merchant_id}&amount={${user.amount}}&transaction_param={${user.transaction_param}}&return_url={${user.return_url}}&card_type={${user.card_type}}`
  // useEffect(() => {
  //     fetch(url)
  //       .then(res => res.json())
  //       .then(data => setdata(data))
  // }, [])
  // console.log(data);
  const refs1 = useRef(null)
  const refs2 = useRef(null)
  const refs3 = useRef(null)
  const refs4 = useRef(null)
  const form = (e)=>{
    e.preventDefault()
    setUser(prev=> { return {...prev ,amount:refs1.current.value}});
    setUser(prev=> { return {...prev ,card_type:refs2.current.value}});
    setUser(prev=> { return {...prev ,return_url:refs3.current.value}});
    setUser(prev=> { return {...prev ,transaction_param:refs4.current.value}});
  }
  return (
    <>
    <form onChange={form} action="https://my.click.uz/services/pay" id="click_form" method="get" target="_blank">
      <input ref={refs1} type="input" name="amount" placeholder='summa' />
      <input ref={refs2} type="input" name="transaction_param" placeholder='card_type' />
      <input ref={refs3} type="input" name="return_url" placeholder='return_url' />
      <input ref={refs4} type="input" name="card_type" placeholder='transaction_param' />
      <button type="submit" className="click_logo"><i></i>Pay with CLICK</button>
    </form>
    <h1>{user.amount}</h1>
    <h1>{user.card_type}</h1>
    <h1>{user.return_url}</h1>
    <h1>{user.transaction_param}</h1>
    </>
  )
}
{/* <input type="input" name="merchant_id" />
        <input type="input" name="merchant_user_id" />
        <input type="input" name="service_id"/> */}
export default Index