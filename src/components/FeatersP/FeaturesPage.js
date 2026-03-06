

function FeaturesPage() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <main className="flex-grow-1 py-5">
        <div className="container">
          <section className="mb-5 text-center">
            <h1 className="display-5 fw-bold mb-3">Platform Features</h1>
            <p className="lead text-white-50">
              Everything you need to connect the right developers with the right
              companies — powered by AI, data, and real code.
            </p>
          </section>

          <section>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body card-body-large">
                    <div className="feature-card-icon">AI</div>
                    <h2 className="h5 mb-2">AI-Powered Matching</h2>
                    <p className="text-white-50 mb-0">
                      Smart matching that analyzes skills, stack, and preferences – not
                      just job titles or buzzwords.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body card-body-large">
                    <div className="feature-card-icon">GH</div>
                    <h2 className="h5 mb-2">GitHub &amp; portfolio sync</h2>
                    <p className="text-white-50 mb-0">
                      Automatically reads real projects to build a profile that reflects
                      how you actually code.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body card-body-large">
                    <div className="feature-card-icon">RT</div>
                    <h2 className="h5 mb-2">Real-time insights</h2>
                    <p className="text-white-50 mb-0">
                      Dashboards for both developers and companies to track matches,
                      applications, and pipeline health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FeaturesPage;

