import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className={'newsletter-page'}>
        <div className={'page-center'}>
          <h2>Subscribe our newsletter</h2>
          <h4>Delivered every two weeks</h4>
          <form className={'contact-form'} action={'/success'}>
            <input type={'text'} name={'name'} placeholder={'your name'} className={'form-control'}/>
            <input type={'email'} name={'email'} placeholder={'your email'} className={'form-control'}/>
            <button type={'submit'} className={'btn submit-btn'}>Subscribe</button>
          </form>
        </div>
      </section>
    </Layout>

  )
}

export default NewsLetter
