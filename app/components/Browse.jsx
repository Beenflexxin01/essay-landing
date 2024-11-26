import Image from "next/image";
import elip from "../../public/Images/elip1.png";
function Browse() {
  return (
    <>
      <div className="container">
        <h2 className="secondary-header work-header">
          Browse Talent By Category
        </h2>
        <div className="grid-4">
          <div className="grid-4-cols browse-grid-4">
            <div className="essay">
              <p className="elipse-description">Essay Writing</p>
              <div className="elipses-img">
                <Image src={elip} alt="Title" className="elip-img" />
                <Image src={elip} alt="Title" className="elip-img elip--img" />
                <Image
                  src={elip}
                  alt="Title"
                  className="elip-img elip--img elip-_img"
                />
                <p className="elip-text">100+ Writers available</p>
              </div>
            </div>
          </div>
          <div className="grid-4-cols browse-grid-4">
            <div className="essay">
              <p className="elipse-description">Essay Writing</p>
              <div className="elipses-img">
                <Image src={elip} alt="Title" className="elip-img" />
                <Image src={elip} alt="Title" className="elip-img elip--img" />
                <Image
                  src={elip}
                  alt="Title"
                  className="elip-img elip--img elip-_img"
                />
                <p className="elip-text">100+ Writers available</p>
              </div>
            </div>
          </div>
          <div className="grid-4-cols browse-grid-4">
            <div className="essay">
              <p className="elipse-description">Essay Writing</p>
              <div className="elipses-img">
                <Image src={elip} alt="Title" className="elip-img" />
                <Image src={elip} alt="Title" className="elip-img elip--img" />
                <Image
                  src={elip}
                  alt="Title"
                  className="elip-img elip--img elip-_img"
                />
                <p className="elip-text">100+ Writers available</p>
              </div>
            </div>
          </div>
          <div className="grid-4-cols browse-grid-4">
            <div className="essay">
              <p className="elipse-description">Essay Writing</p>
              <div className="elipses-img">
                <Image src={elip} alt="Title" className="elip-img" />
                <Image src={elip} alt="Title" className="elip-img elip--img" />
                <Image
                  src={elip}
                  alt="Title"
                  className="elip-img elip--img elip-_img"
                />
                <p className="elip-text">100+ Writers available</p>
              </div>
            </div>
          </div>
          <div className="grid-4-cols browse-grid-4">
            <div className="essay">
              <p className="elipse-description">Essay Writing</p>
              <div className="elipses-img">
                <Image src={elip} alt="Title" className="elip-img" />
                <Image src={elip} alt="Title" className="elip-img elip--img" />
                <Image
                  src={elip}
                  alt="Title"
                  className="elip-img elip--img elip-_img"
                />
                <p className="elip-text">100+ Writers available</p>
              </div>
            </div>
          </div>
          <div className="grid-4-cols browse-grid-4">
            <div className="essay">
              <p className="elipse-description">Essay Writing</p>
              <div className="elipses-img">
                <Image src={elip} alt="Title" className="elip-img" />
                <Image src={elip} alt="Title" className="elip-img elip--img" />
                <Image
                  src={elip}
                  alt="Title"
                  className="elip-img elip--img elip-_img"
                />
                <p className="elip-text">100+ Writers available</p>
              </div>
            </div>
          </div>
          <div className="grid-4-cols browse-grid-4">
            <div className="essay">
              <p className="elipse-description">Essay Writing</p>
              <div className="elipses-img">
                <Image src={elip} alt="Title" className="elip-img" />
                <Image src={elip} alt="Title" className="elip-img elip--img" />
                <Image
                  src={elip}
                  alt="Title"
                  className="elip-img elip--img elip-_img"
                />
                <p className="elip-text">100+ Writers available</p>
              </div>
            </div>
          </div>
          <div className="grid-4-cols browse-grid-4">
            <div className="essay">
              <p className="elipse-description">Essay Writing</p>
              <div className="elipses-img">
                <Image src={elip} alt="Title" className="elip-img" />
                <Image src={elip} alt="Title" className="elip-img elip--img" />
                <Image
                  src={elip}
                  alt="Title"
                  className="elip-img elip--img elip-_img"
                />
                <p className="elip-text">100+ Writers available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hire">
          <button className="cta-btn cta-btn-writer hire-btn">
            Browse All Skills
          </button>
        </div>
      </div>
    </>
  );
}

export default Browse;
