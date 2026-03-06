function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="loading-spinner">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">{message}</span>
        </div>
        <p className="mt-3">{message}</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
