import logoplanscan from '../../assets/Logo (1).png'

function Footer() {
  return (
    <div className='container-fluid mt-5'>
<div className="row">
    <div className="col-lg-4 col-md-4 col-12">
                
<img src={logoplanscan} alt="" />
<p className='my-2'>Elevate your construction business with AI</p>
    </div>
    <div className="col-lg-8 col-md-8 col-12">
        <p>Contact</p>
        <p className='my-2'>help@planscan.io</p>
        <button type="button" className="btn btn-outline-primary">contact us</button>
    </div>
</div>
      
    </div>
  )
}

export default Footer
