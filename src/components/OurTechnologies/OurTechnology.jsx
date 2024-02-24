import technologyImg from "../../assets/Rectangle 6.png";
import "./ourTechnology.css";
function OurTechnology() {
  return (
    <div>
      <div className="container">
        <p className="my-4 fw-bold">Our Technology</p>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card border-0">
              <img src={technologyImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title my-2 text-primary">
                  AI-powered CSI code assignment
                </h5>
                <p className="card-text">
                  Automatically extract text from your construction documents
                  and assign CSI MasterFormat codes to each item.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img src={technologyImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title my-2 text-primary">
                Buyout made painless
                </h5>
                <p className="card-text">
                Designate CSI codes to custom bid packages and significantly reduce scope gaps during buyout.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card  border-0">
              <img src={technologyImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title my-2 text-primary">
                Understand drawings faster
                </h5>
                <p className="card-text">
                Its nearly impossible and often unnecessary to learn every detail of every drawing. Create focused drawing sets, filtered by scope, for the appropriate team members to study and retain.
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default OurTechnology;
