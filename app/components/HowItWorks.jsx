function HowItWorks() {
  return (
    <>
      <div className="work-container">
        <h2 className="secondary-header work-header">How it Works</h2>
        <div className="grid-3">
          <div className="grid-3-cols">
            <p className="work-number">01.</p>
            <h4 className="nursery-header">Create an Account</h4>
            <p className="text-description">
              Create an account on ATRA and subscribe to any of our plans that
              works best for your organization
            </p>
          </div>
          <div className="grid-3-cols">
            <p className="work-number">02.</p>
            <h4 className="nursery-header">Post your Task</h4>
            <p className="text-description">
              Invite your team to ATRA! Collaborate, assign tasks, and track
              program in one platform
            </p>
          </div>
          <div className="grid-3-cols">
            <p className="work-number">03.</p>
            <h4 className="nursery-header">Post your Task</h4>
            <p className="text-description">
              Get field documentation done right the first time, with an app
              that is easy-to-use
            </p>
          </div>
        </div>
        <div className="hire">
          <p className="text-description">Are you ready to hire a writer?</p>

          <button className="cta-btn cta-btn-writer hire-btn">Hire Now</button>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
