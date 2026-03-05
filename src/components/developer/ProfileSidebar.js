import { Link } from 'react-router-dom';

function DeveloperProfileSidebar() {
  return (
    <>
      <section className="glass-card mb-4" id="profile">
        <div className="p-4">
          <h3 className="h5 mb-3">Profile Overview</h3>
          <ul className="list-unstyled small mb-3">
            <li className="mb-2">
              <span className="fw-semibold">Status:</span>{' '}
              <span className="badge bg-success">Open to work</span>
            </li>
            <li className="mb-2">
              <span className="fw-semibold">Primary stack:</span> React, Node.js
            </li>
            <li className="mb-2">
              <span className="fw-semibold">Location:</span> Remote · Riyadh
            </li>
          </ul>
          <button className="btn btn-outline-light btn-sm w-100">Edit profile</button>
        </div>
      </section>

      <section className="glass-card mb-4" id="notifications">
        <div className="p-4">
          <h3 className="h6 mb-2">Notifications</h3>
          <p className="small text-white-50 mb-2">
            You have <span className="fw-semibold">3</span> new notifications.
          </p>
          <ul className="list-unstyled small text-white-50 mb-3">
            <li className="mb-1">MENA Tech Labs viewed your profile.</li>
            <li className="mb-1">New React role matches 90% of your skills.</li>
            <li className="mb-1">Complete your profile to unlock more matches.</li>
          </ul>
          <Link to="/notifications" className="small text-white-50 text-decoration-none">
            View all notifications →
          </Link>
        </div>
      </section>

      <section className="glass-card">
        <div className="p-4">
          <h3 className="h6 mb-2">Boost your profile</h3>
          <p className="small text-white-50 mb-3">
            Get 3x more visibility to hiring managers at top tech companies across
            MENA.
          </p>
          <button className="btn btn-primary btn-sm w-100 mb-2">Upgrade now</button>
          <Link to="/boost" className="small text-white-50 text-decoration-none">
            Learn more about Boost →
          </Link>
        </div>
      </section>
    </>
  );
}

export default DeveloperProfileSidebar;

