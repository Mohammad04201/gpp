function ErrorMessage({ error, onRetry }) {
  return (
    <div className="error-message">
      <div className="alert alert-danger" role="alert">
        <h4>حدث خطأ</h4>
        <p>{error}</p>
        {onRetry && (
          <button className="btn btn-primary" onClick={onRetry}>
            إعادة المحاولة
          </button>
        )}
      </div>
    </div>
  );
}

export default ErrorMessage;
